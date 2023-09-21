import { Form, Input, Button } from "antd";

export function LoginForm() {
  return (
    <Form onFinish={(values) => {
			console.info(values)
		}}>
			<Form.Item name="username" label="Username" rules={[ { required: true }]}>
				<Input />
			</Form.Item>
	
			<Form.Item name="password" label="Password" rules={[ { required: true }]}>
				<Input.Password />
			</Form.Item>
	
			<Button htmlType="submit">Log in</Button>
		</Form>
  )
}