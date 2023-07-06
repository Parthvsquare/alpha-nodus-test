import { tenantInput } from "@/store/authAtom";
import { useLocationListQuery } from "@/types/generated";
import {
  App,
  Button,
  Card,
  Col,
  Input,
  Result,
  Row,
  Spin,
  Tag,
  Typography,
} from "antd";
import { RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { useAtom } from "jotai";
import ReactJson from "react-json-view";

const { Text, Title } = Typography;

function Home() {
  const [tenant] = useAtom(tenantInput);
  const { notification, modal } = App.useApp();

  const { data, loading, error } = useLocationListQuery({
    variables: {
      //@ts-expect-error
      tenantInput: tenant,
    },
    onError(error) {
      notification.error({
        message: "Cannot create a new location",
      });
      modal.error({
        title: "Encountered an Error",
        content: <ReactJson src={error} theme="monokai" />,
        width: "60vh",
      });
    },
  });

  if (error) {
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />;
  }

  return (
    <>
      <section>
        <div style={{ display: "flex", margin: "1rem" }}>
          <Input
            placeholder="Search Locations"
            disabled={data?.locationList?.resources?.length === 0}
          />
        </div>
      </section>

      <Spin spinning={loading}>
        <Row gutter={[10, 16]} style={{ padding: "1rem" }}>
          {data?.locationList?.resources?.map((value) => {
            return (
              <Col
                xs={{ span: 4, offset: 1 }}
                lg={{ span: 6, offset: 0 }}
                key={value!.id}
              >
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBlock: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Title level={4}>{value?.name}</Title>
                        <Text style={{ fontWeight: "normal" }}>
                          {value?.address}
                        </Text>
                      </div>
                      <div>
                        <Tag
                          color="processing"
                          style={{ textTransform: "capitalize" }}
                        >
                          {value?.status}
                        </Tag>
                      </div>
                    </div>
                  }
                >
                  {/* <div style={{ display: "flex", rowGap: "1rem" }}>
                    <Text>{value?.telecom.}</Text>
                  </div> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Spin>
    </>
  );
}

export default Home;
