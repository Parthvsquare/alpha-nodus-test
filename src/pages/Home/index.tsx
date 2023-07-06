import CreateLocation from "@/components/Modal/CreateLocation";
import { tenantInput } from "@/store/authAtom";
import { LocationWriteInput, useLocationListQuery } from "@/types/generated";
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
import { useAtom } from "jotai";
import { useState } from "react";
import ReactJson from "react-json-view";

const { Text, Title } = Typography;

function Home() {
  const [tenant] = useAtom(tenantInput);
  const { notification, modal } = App.useApp();
  const [open, setOpen] = useState(false);
  const [inputCapture, setInputCapture] = useState("");
  const [initialValues, setInitialValues] = useState<LocationWriteInput>();

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

  function onDoubleClick(index: number) {
    setOpen(true);

    const formValue = data?.locationList?.resources![index];
    const value: LocationWriteInput = {
      name: formValue!.name,
      address: formValue?.address,
      alias: formValue?.alias,
      description: formValue?.description,
      id: formValue?.id,
      managingOrganization: formValue?.managingOrganization,
      npi: formValue?.npi,
      partOf: formValue?.partOf,
      status: formValue?.status,
      tag: formValue?.tag,
      taxId: formValue?.taxId,
      telecom: [...(formValue?.telecom || [])],
      tenant: formValue?.tenant,
      type: formValue?.type,
      updatedAt: formValue?.updatedAt,
    };

    setInitialValues(value);
  }

  return (
    <>
      <section>
        <div style={{ display: "flex", margin: "1rem" }}>
          <Input
            onChange={(e) => setInputCapture(e.target.value)}
            placeholder="Search Location names"
            disabled={data?.locationList?.resources?.length === 0}
          />
        </div>
      </section>

      <Spin spinning={loading}>
        <Row gutter={[10, 16]} style={{ padding: "1rem" }}>
          {data?.locationList?.resources?.map((value, index) => {
            return (
              <Col
                xs={{ span: 4, offset: 1 }}
                lg={{ span: 6, offset: 0 }}
                key={value!.id}
              >
                <Card
                  onDoubleClick={() => onDoubleClick(index)}
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

      <CreateLocation
        open={open}
        handleClose={() => setOpen(!open)}
        initialValue={initialValues}
      />
    </>
  );
}

export default Home;
