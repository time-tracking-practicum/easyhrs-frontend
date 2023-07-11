import { useEffect, useMemo, useRef, useState } from 'react';
import SidebarInput from '../SidebarInput';
import SidebarButton from '../SidebarButton';
import {
	CREATE_TASK_FORM_TEXT as TEXT,
	INITIAL_CREATE_TASK_INPUTS_STATE as INIT_INPUT_STATE,
} from '../../utils/constants';
import './CreateTaskForm.css';
import SidebarSelect from '../SidebarSelect';
import SidebarCheckbox from '../SidebarCheckbox';
import SidebarDatePicker from '../SidebarDatePicker';
import EmojiForm from '../EmojiForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import useDatePicker from '../../hooks/useDatePicker';
import useCheckboxes from '../../hooks/useCheckboxes';
import projectApi from '../../utils/ProjectApi';

const CreateTaskForm = ({
	projectList,
	setProjectList,
	handleCreateTask,
	setCurrentUserProjects,
	setIsCreateTaskFormOpen,
	isImportant,
	isUrgent,
}) => {
	const [isOpenEmoji, setIsOpenEmoji] = useState(false);
	const [emoji, setEmoji] = useState('😛');

	const inputRef = useRef(null);

	const {
		values: inputValues,
		handleChange: handleChangeInput,
		isValid: isInputValid,
		errors: inputErrors,
		setValues: setInputValues,
	} = useFormAndValidation(INIT_INPUT_STATE);
	const { dateValues, handleDateChange } = useDatePicker({
		startTime: '',
		deadline: '',
	});
	const { checkboxesValue, handleCheckboxChange, setCheckboxValue } =
		useCheckboxes({ isImportant: !!isImportant, isUrgent: !!isUrgent });

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const isProjectInputRequired = useMemo(
		() => !(inputValues.projectName || projectList.selected),
		[inputValues.projectName, projectList.selected]
	);

	function handleClickEmoji(e) {
		e.preventDefault();
		setIsOpenEmoji(!isOpenEmoji);
	}

	const unsetCheckboxes = () => {
		setCheckboxValue({ isImportant: false, isUrgent: false });
	};

	const clearInputs = () => {
		setInputValues(INIT_INPUT_STATE);
	};

	function handleEmojiSelect(em) {
		setEmoji(em.native);
		setIsOpenEmoji(false);
	}

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		let selectedProject;

		if (
			// Если инпут заполнен и такого же существующего проекта ещё нет
			inputValues.projectName &&
			!projectList.all.find(
				(project) => project.title === inputValues.projectName
			)
		) {
			// Создаём новый проект
			try {
				const newProject = await projectApi.createProject({
					title: inputValues?.projectName,
				});
				await setCurrentUserProjects();
				// Присваиваем новый проект задаче
				selectedProject = newProject.id;
			} catch (err) {
				console.error(err);
			}
		} else if (
			// Если такой проект уже существует
			projectList.all.find(
				(project) => project.title === inputValues.projectName
			)
		) {
			// Присваиваем уже существующий проект задаче
			selectedProject = projectList.all.find(
				(project) => project.title === inputValues.projectName
			).id;
		} else {
			// в обратном случае присваиваем проект, выбранный в селекте
			selectedProject = projectList.selected.id;
		}

		const newTask = {
			name: inputValues?.taskName,
			project: selectedProject,
			status: 'appointed',
			is_urgent: checkboxesValue?.isUrgent,
			is_important: checkboxesValue?.isImportant,
			emoji,
			deadline: new Date(dateValues?.deadline).toISOString(),
			start_time: new Date(dateValues?.startTime).toISOString(),
		};
		console.log(projectList);

		try {
			await handleCreateTask(newTask);
		} catch (err) {
			console.error(err);
		}

		setIsCreateTaskFormOpen(false);
		unsetCheckboxes();
		clearInputs();
	};

	const isDateCorrect =
		new Date(dateValues.deadline).getTime() >=
		new Date(dateValues.startTime).getTime();

	return (
		<div className="createTaskForm">
			<h1 className="createTaskForm__title">{TEXT.HEADING}</h1>
			<form
				className="createTaskForm__form"
				action="#"
				name="reset-password"
				onSubmit={handleSubmitForm}
			>
				<fieldset className="createTaskForm__fieldset">
					<SidebarInput
						value={inputValues.taskName}
						inputRef={inputRef}
						type="text"
						name="taskName"
						autoComplete="off"
						errText={inputErrors.taskName}
						onChange={handleChangeInput}
						error={inputErrors.taskName}
						required
						isValid={isInputValid}
						placeholder={TEXT.NEW_TASK_NAME_PLACEHOLDER}
					/>
					<SidebarSelect
						items={projectList}
						setItems={setProjectList}
						placeholder={TEXT.PROJECT_PLACEHOLDER}
					/>
					<SidebarInput
						value={inputValues.projectName}
						className="createTaskForm__project-input"
						type="text"
						name="projectName"
						required={isProjectInputRequired}
						autoComplete="off"
						errText={inputErrors.projectName}
						onChange={handleChangeInput}
						error={inputErrors.projectName}
						isValid={isInputValid}
						placeholder={
							projectList.selected
								? projectList?.selected?.title
								: TEXT.NEW_TASK_PROJECTNAME_PLACEHOLDER
						}
					/>
					{!inputErrors.projectName && (
						<p className="createTaskForm__select-description">
							{inputValues.projectName
								? `Будет ${
										projectList.all.find(
											(project) => project.title === inputValues.projectName
										)
											? 'выбран'
											: 'создан новый'
								  } проект с названием “${inputValues.projectName}”`
								: 'Выберете проект или введите название нового проекта'}
						</p>
					)}
					<SidebarDatePicker
						value={dateValues.startTime}
						minDate={new Date()}
						maxDate={dateValues.deadline || undefined}
						name="startTime"
						onChange={handleDateChange}
						required
						placeholder={TEXT.START_TIME_PLACEHOLDER}
					/>
					<SidebarDatePicker
						value={dateValues.deadline}
						disabled={!dateValues.startTime}
						minDate={dateValues.startTime || new Date()}
						name="deadline"
						onChange={handleDateChange}
						required
						placeholder={TEXT.DEADLINE_PLACEHOLDER}
					/>
					<div className="createTaskForm__checkbox-container">
						<SidebarCheckbox
							isChecked={checkboxesValue.isImportant}
							onChange={handleCheckboxChange}
							name="isImportant"
							text={TEXT.IS_IMPORTANT_RADIO}
						/>
						<SidebarCheckbox
							isChecked={checkboxesValue.isUrgent}
							onChange={handleCheckboxChange}
							name="isUrgent"
							text={TEXT.IS_URGENT_RADIO}
						/>
						<div className="createTaskForm__emoji-container">
							{isOpenEmoji && (
								<div className="createTaskForm__emoji-picker">
									<EmojiForm onEmojiSelect={handleEmojiSelect} />
								</div>
							)}
							<button
								className="createTaskForm__emoji-button"
								onClick={handleClickEmoji}
							>
								<span className="createTaskForm__emoji">{emoji}</span>Emoji
							</button>
						</div>
					</div>
				</fieldset>

				<div className="createTaskForm__btnContainer createTaskForm__btnContainer_justify-center">
					<SidebarButton
						disabled={
							!isDateCorrect || !inputValues.taskName || isProjectInputRequired
						}
						size="primary"
						type="submit"
						text={TEXT.CONTINUE_BUTTON}
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateTaskForm;
