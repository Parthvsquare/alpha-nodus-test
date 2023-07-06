import { tenantInput } from "@/store/authAtom";
import {
  LocationWriteInput,
  useLocationCreateMutation,
} from "@/types/generated";
import { App, Button, Col, Form, Input, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";

interface IProps {
  open: boolean;
  handleClose: () => void;
}
const { TextArea } = Input;

function CreateLocation({ open, handleClose }: IProps) {
  const [locationCreateMutation, { loading, error }] =
    useLocationCreateMutation({
      onCompleted: () => {
        form.resetFields();
        handleClose();
      },
    });

  const [form] = useForm<LocationWriteInput>();
  const { message } = App.useApp();
  const [tenant] = useAtom(tenantInput);

  async function formSubmit() {
    try {
      await form.validateFields();
      locationCreateMutation({
        variables: {
          requestBody: {
            ...form.getFieldsValue(),
          },
          //@ts-expect-error
          tenantInput: tenant,
        },
      });
    } catch (e) {
      message.error("Something went wrong while validating ");
    }
  }

  return (
    <Form
      name="create_location"
      form={form}
      disabled={loading}
      onSubmitCapture={formSubmit}
    >
      <Modal
        open={open}
        width="100%"
        title="Create Location"
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose} disabled={loading}>
            Close
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            type="primary"
            onClick={formSubmit}
            loading={loading}
          >
            Submit
          </Button>,
        ]}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Location Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter Name for this Location",
                },
              ]}
              required
            >
              <Input />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="Alias" name="alias">
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="ID" name="id">
              <Input />
            </Form.Item>
            <Form.Item
              label="Managing Organization"
              name="managingOrganization"
            >
              <Input />
            </Form.Item>
            <Form.Item label="NPI" name="npi">
              <Input />
            </Form.Item>
            <Form.Item label="Part Of" name="partOf">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>
            <Form.Item label="Tag" name="tag">
              <Input />
            </Form.Item>
            <Form.Item label="Tax ID" name="taxId">
              <Input />
            </Form.Item>

            <Form.Item label="Tenant" name="tenant">
              <Input />
            </Form.Item>
            <Form.Item label="Type" name="type">
              <Input />
            </Form.Item>
            <Form.Item label="Updated At" name="updatedAt">
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.List name="telecom">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item key={field.key} label={`Rank ${index + 1}`}>
                      <Form.Item
                        label={`Telecom ${index + 1} Rank`}
                        name={[field.name, "rank"]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label={`Telecom ${index + 1} System`}
                        name={[field.name, "system"]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label={`Telecom ${index + 1} Use`}
                        name={[field.name, "use"]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label={`Telecom ${index + 1} Value`}
                        name={[field.name, "value"]}
                      >
                        <Input />
                      </Form.Item>
                      <Button danger onClick={() => remove(field.name)}>
                        Remove Telecom Rank {index + 1}
                      </Button>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add Telecom
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Col>
        </Row>
      </Modal>
    </Form>
  );
}

export default CreateLocation;