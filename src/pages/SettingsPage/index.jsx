import './SettingsPage.css';
import Header from '../../components/Header';
import TimeFormatSetting from '../../components/TimeFormatSetting';
import RemindersSetting from '../../components/RemindersSetting';
import TimerSetting from '../../components/TimerSetting';
import TimerSettingOption from '../../components/TimerSettingOption';

export default function SettingsPage() {
	return (
		<section className="settings">
			<Header sectionName="Настройки" />
			<TimeFormatSetting />
			<RemindersSetting />
			<TimerSetting />
			<TimerSettingOption />
		</section>
	);
}
