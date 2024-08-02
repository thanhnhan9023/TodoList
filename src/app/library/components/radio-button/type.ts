export interface RadioButtonProps {
  /**
   * Default state of radio button
   * @default false
   */
  initialValue?: boolean;

  /**
   * Radio button size
   * @default 24
   */
  size?: number;

  /**
   * Overwrite value
   * @default undefined
   */
  value?: boolean;

  /**
   * On radio button press
   */
  onToggle?: (value: boolean) => void;

  /**
   * Radio button is disabled
   * @default false
   */
  disabled?: boolean;
}
