// Action to trigger when someone is writting in textarea
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value: value,
  key: name,
});

// Action to trigger if someone want to send a message
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

// Action to trigger if the message is send
export const SENT_MSG = 'SENT_MESSAGE';

export const sentMsg = (message) => ({
  type: SENT_MSG,
  message,
});

// Action to trigger if the message was sent with succes
export const INIT_SUCCESS = 'INIT_SUCCESS';

export const initSucces = () => ({
  type: INIT_SUCCESS,
});
