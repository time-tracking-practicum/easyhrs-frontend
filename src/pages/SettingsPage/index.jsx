import React, { useState } from 'react';
import './SettingsPage.css';
import Header from '../../components/Header';
import RemindersSetting from '../../components/RemindersSetting';
import TimerSetting from '../../components/TimerSetting';
import TimerSettingOption from '../../components/TimerSettingOption';

export default function SettingsPage() {
	const [notifications, setNotifications] = useState(false);
	return (
		<section className="settings">
			<Header sectionName="Настройки" />
			<RemindersSetting notifications={notifications} setNotifications={setNotifications}/>
			<TimerSetting notifications={notifications}/>
			<TimerSettingOption notifications={notifications}/>
		</section>
	);
}
