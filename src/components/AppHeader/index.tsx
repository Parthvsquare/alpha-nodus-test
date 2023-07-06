import { Typography, Button } from "antd";
import { RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { LocationListDocument } from "@/types/generated";
import { useState } from "react";
import CreateLocation from "../Modal/CreateLocation";
import client from "@/apollo/client";

const { Title } = Typography;
function AppHeader() {
  const [open, setOpen] = useState(false);

  async function refetchLocationList() {
    await client.refetchQueries({
      include: [LocationListDocument],
    });
    return;
  }

  return (
    <>
      <div
        style={{
          width: "80%",
          padding: "1rem 0",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
        }}
      >
        <Button icon={<RedoOutlined />} onClick={refetchLocationList}>
          Reload
        </Button>
        <Title level={2}>Locations</Title>
        <Button icon={<PlusOutlined />} onClick={() => setOpen(true)}>
          New
        </Button>
      </div>
      <CreateLocation open={open} handleClose={() => setOpen(!open)} />
    </>
  );
}

export default AppHeader;
