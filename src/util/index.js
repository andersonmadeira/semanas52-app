import { NativeModules, Platform } from 'react-native';
import moment from 'moment';

export function getWeekNumberFromDate(momentDate) {
    return momentDate.isAfter(moment()) ? 0 : moment().diff(momentDate, 'week') + 1;
}

export function getPercentualFromWeek(weekNumber) {
    return (weekNumber / 52) * 100;
}

export function getLocale() {
    let systemlang = 'en';

    if (Platform.OS === 'android') {
        systemlang = NativeModules.I18nManager.localeIdentifier;
    } else {
        systemlang = NativeModules.SettingsManager.settings.AppleLocale;
    }

    return systemlang;
}