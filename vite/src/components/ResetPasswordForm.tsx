import { Form, Input, Button } from "antd";

export function ResetPasswordForm() {
  return (
    <Form onFinish={(values) => {
			console.info(values)
		}}>
			<Form.Item name="email" label="Email" rules={[ { required: true }]}>
				<Input />
			</Form.Item>
	
			<Button htmlType="submit">Reset password</Button>
		</Form>
  )
}