import { tenantInput } from "@/store/authAtom";
import { useLocationListQuery } from "@/types/generated";
import { Button, Card, Col, Result, Row, Spin } from "antd";
import { useAtom } from "jotai";

function Home() {
  const [tenant] = useAtom(tenantInput);

  const { data, loading, error } = useLocationListQuery({
    variables: {
      //@ts-expect-error
      tenantInput: tenant,
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
    <Spin spinning={loading}>
      <Row>
        <Col>
          {data?.locationList?.resources?.map((value) => {
            return (
              <Card key={value!.id}>
                <div>{value?.id}</div>
                <div>{value?.name}</div>
                <div>{value?.tag}</div>
                <div>{value?.type}</div>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Spin>
  );
}

export default Home;
