import momentGenerateConfig from "@rc-component/picker/es/generate/moment";
import { DatePicker } from 'antd';
// Keep assui's public date values and callbacks compatible with Moment.
var MomentDatePicker = DatePicker.generatePicker(momentGenerateConfig);
export default MomentDatePicker;