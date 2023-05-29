export const CHANGE_ARIA_EXPEND = 'CHANGE_ARIA_EXPEND';

export const changeAriaExpend = (value, aria) => ({
  type: CHANGE_ARIA_EXPEND,
  value: value,
  key: aria,
});
