import { Form, Input, Button } from "antd";

import './index.css'

function TestForm() {
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
	
			<Button htmlType="submit">Submit</Button>
		</Form>
  )
}

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
	<div className="w-[300px] border rounded p-4">

    <TestForm />
  </div>
  </main>
  )
}

export default App
