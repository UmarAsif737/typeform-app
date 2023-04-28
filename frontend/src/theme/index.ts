import { extendTheme } from '@chakra-ui/react';
import { SelectStyles, SelectVariants } from './additions/select';
// import { SimpleTableComponent } from './additions/table';
import { buttonStyles, ButtonVariants } from './components/button';
import { headingStyles, HeadingVariants } from './components/heading';
import { iconButtonStyles, IconButtonVariants } from './components/iconButton';
import { inputStyles, InputVariants } from './components/input';
import { radioStyles, RadioVariants } from './components/radio';
import { switchStyles, SwitchVariants } from './components/switch';
import { tabsStyles, TabsVariants } from './components/tabs';
import { textStyles, TextVariants } from './components/text';
import { textareaStyles, TextareaVariants } from './components/textarea';
import { fonts } from './foundations/fonts';
import { config } from './theme/config';
// import { tooltipStyles, TooltipVariants } from './components/tooltip';

import { globalStyles } from './theme/globals';

export {
  ButtonVariants,
  HeadingVariants,
  IconButtonVariants,
  InputVariants,
  TextareaVariants,
  TextVariants,
  SwitchVariants,
  TabsVariants,
  RadioVariants,
  SelectVariants
  // TooltipVariants
}

export default extendTheme(
  globalStyles,
  fonts,
  config,
  buttonStyles,
  headingStyles,
  iconButtonStyles,
  inputStyles,
  textareaStyles,
  textStyles,
  // SimpleTableComponent,
  switchStyles,
  tabsStyles,
  radioStyles,
  SelectStyles
  // tooltipStyles
);
