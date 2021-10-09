import Layout from 'components/Layout';
import { useState } from 'react';

const DEFAULT_DATA = {
	title: '',
	description: '',
	link: '',
	priority: 2,
	timeToFinish: 60,
};

const ResourceCreate = () => {
	const [form, setForm] = useState(DEFAULT_DATA);

	const submitForm = () => {
		alert(JSON.stringify(form));
	};

	const resetForm = () => setForm(DEFAULT_DATA);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	return (
		<Layout>
			<div className="containet">
				<div className="columns">
					<div className="column is-8 is-offset-2">
						<div className="resource-form">
							<h1 className="title">Add New Resource</h1>
							<form>
								<div className="field">
									<label className="label">Title</label>
									<div className="control">
										<input
											value={form.title}
											name="title"
											onChange={handleChange}
											className="input"
											type="text"
											placeholder="Title Text input"
										/>
									</div>
								</div>
								<div className="field">
									<label className="label">Description</label>
									<div className="control">
										<textarea
											value={form.description}
											name="description"
											onChange={handleChange}
											className="textarea"
											placeholder="Description Textarea"
										></textarea>
									</div>
								</div>
								<div className="field">
									<label className="label">Link</label>
									<div className="control">
										<input
											value={form.link}
											name="link"
											onChange={handleChange}
											className="input"
											type="text"
											placeholder="Link Text input"
										/>
									</div>
								</div>
								<div className="field">
									<label className="label">Priority</label>
									<div className="control">
										<div className="select">
											<select
												value={form.priority}
												name="priority"
												onChange={handleChange}
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>
										</div>
									</div>
								</div>
								<div className="field">
									<label className="label">
										Time to Finish
									</label>
									<div className="control">
										<input
											value={form.timeToFinish}
											name="timeToFinish"
											onChange={handleChange}
											className="input"
											type="number"
											placeholder="Time in minutes"
										/>
									</div>
									<p className="help">Time in minutes</p>
								</div>
								<div className="field is-grouped">
									<div className="control">
										<button
											className="button is-link"
											type="button"
											onClick={submitForm}
										>
											Submit
										</button>
									</div>
									<div className="control">
										<button
											className="button is-link is-light"
											type="button"
											onClick={resetForm}
										>
											Reset Form
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ResourceCreate;
