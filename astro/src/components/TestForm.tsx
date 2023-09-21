import { Form, Input, Button } from "antd";

export function TestForm() {
  return (
    <Form>
			<Form.Item label="Username">
				<Input />
			</Form.Item>
	
			<Form.Item label="Password">
				<Input.Password />
			</Form.Item>
	
			<Button>Submit</Button>
		</Form>
  )
}