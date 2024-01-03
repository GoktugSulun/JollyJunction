import { AppConfigActions } from '../Store/AppConfig.slice';

export const snackbar = (message, options) => AppConfigActions.enqueueSnackbar({ message, options });