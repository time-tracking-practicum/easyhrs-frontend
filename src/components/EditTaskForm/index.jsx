import { useState } from 'react';
import SidebarInput from '../SidebarInput';
import SidebarButton from '../SidebarButton';
import { EDIT_TASK_FORM_TEXT as TEXT } from '../../utils/constants';
import './EditTaskForm.css';
import SidebarSelect from '../SidebarSelect';
import SidebarCheckbox from '../SidebarCheckbox';
import SidebarDatePicker from '../SidebarDatePicker';
import EmojiForm from '../EmojiForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import useDatePicker from '../../hooks/useDatePicker';
import useCheckboxes from '../../hooks/useCheckboxes';
import ProfileFormButton from '../ProfileFormButton';
import deleteIcon from '../../images/icon-delete.svg';

const EditTaskForm = ({
	task,
	projectList,
	setProjectList,
	handleEditTask,
	handleDeleteTask,
	setIsEditTaskFormOpen,
	timerTime,
	play,
	actualTask,
}) => {
	const [isOpenEmoji, setIsOpenEmoji] = useState(false);
	const [emoji, setEmoji] = useState(task.emoji);

	const {
		values: inputValues,
		handleChange: handleInputChange,
		isValid: isInputValid,
		errors: inputErrors,
	} = useFormAndValidation({
		taskName: task.name,
	});
	const { dateValues, handleDateChange } = useDatePicker({
		startTime: new Date(task.start_time),
		deadline: new Date(task.deadline),
	});
	const { checkboxesValue, handleCheckboxChange } = useCheckboxes({
		isImportant: !!task.is_important,
		isUrgent: !!task.is_urgent,
	});

	function handleClickEmoji(e) {
		e.preventDefault();
		setIsOpenEmoji(!isOpenEmoji);
	}

	function handleEmojiSelect(em) {
		setEmoji(em.native);
		setIsOpenEmoji(false);
	}

	function handleDeleteButton() {
		handleDeleteTask(task.id);
		setIsEditTaskFormOpen(false);
	}

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const newTask = {
			id: task.id,
			name: inputValues?.taskName,
			project: projectList?.selected?.id,
			is_urgent: checkboxesValue?.isUrgent,
			is_important: checkboxesValue?.isImportant,
			emoji,
			deadline: new Date(dateValues?.deadline).toISOString(),
			start_time: new Date(dateValues?.startTime).toISOString(),
		};

		handleEditTask(newTask);
		setIsEditTaskFormOpen(false);
	};

	const isDateCorrect =
		new Date(dateValues.deadline).getTime() >=
		new Date(dateValues.startTime).getTime();

	let timeInProgress = task.time_in_progress;
	return (
		<div className="editTaskForm">
			<h1 className="editTaskForm__title">{task.name}</h1>
			{( actualTask.name === task.name ) && play ? (
				<span className="editTaskForm__status">
					В работе&nbsp; 
					{timerTime.h >= 10 ? timerTime.h : `0${timerTime.h}`}:
					{timerTime.m >= 10 ? timerTime.m : `0${timerTime.m}`}:
					{timerTime.s >= 10 ? timerTime.s : `0${timerTime.s}`}	
				</span>
			) : (
				<span className="editTaskForm__status">
					Пауза&nbsp; 
					{timeInProgress.h >= 10 ? timeInProgress.h : `0${timeInProgress.h}`}:
					{timeInProgress.m >= 10 ? timeInProgress.m : `0${timeInProgress.m}`}:
					{timeInProgress.s >= 10 ? timeInProgress.s : `0${timeInProgress.s}`}	
				</span>
			)}
			<form
				className="editTaskForm__form"
				action="#"
				name="reset-password"
				onSubmit={handleSubmitForm}
			>
				<fieldset className="editTaskForm__fieldset">
					<SidebarInput
						value={inputValues.taskName}
						type="text"
						label
						isEditable
						name="taskName"
						autoComplete="off"
						errText={inputErrors?.taskName}
						onChange={handleInputChange}
						error={inputErrors?.taskName}
						required
						isValid={isInputValid}
						placeholder={TEXT.NEW_TASK_NAME_PLACEHOLDER}
					/>
					<SidebarSelect
						items={projectList}
						setItems={setProjectList}
						required
						isEditable
						label
						placeholder={TEXT.PROJECT_PLACEHOLDER}
					/>
					<SidebarDatePicker
						value={dateValues.startTime}
						minDate={new Date()}
						maxDate={dateValues.deadline || undefined}
						name="startTime"
						label
						isEditable
						onChange={handleDateChange}
						required
						placeholder={TEXT.START_TIME_PLACEHOLDER}
					/>
					<SidebarDatePicker
						value={dateValues.deadline}
						minDate={dateValues.startTime || new Date()}
						name="deadline"
						label
						isEditable
						onChange={handleDateChange}
						required
						placeholder={TEXT.DEADLINE_PLACEHOLDER}
					/>
					<div className="editTaskForm__checkbox-container">
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
						<div className="editTaskForm__emoji-container">
							{isOpenEmoji && (
								<div className="editTaskForm__emoji-picker">
									<EmojiForm onEmojiSelect={handleEmojiSelect} />
								</div>
							)}
							<button
								className="editTaskForm__emoji-button"
								onClick={handleClickEmoji}
							>
								<span className="editTaskForm__emoji">{emoji}</span>Emoji
							</button>
						</div>
					</div>
				</fieldset>

				<ProfileFormButton
					text={TEXT.DELETE_BUTTON}
					type="button"
					buttonImg={deleteIcon}
					onclick={handleDeleteButton}
				/>

				<div className="editTaskForm__btnContainer editTaskForm__btnContainer_justify-center">
					<SidebarButton
						disabled={
							!isDateCorrect || !projectList.selected || !inputValues.taskName
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

export default EditTaskForm;
