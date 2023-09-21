import { Form, Input, Button } from "antd";

import './index.css'

function TestForm() {
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
