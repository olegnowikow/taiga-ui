import {TuiProgressFixedGradientDirective} from './progress-bar/fixed-gradient/progress-fixed-gradient.directive';
import {TuiProgressBar} from './progress-bar/progress-bar.component';
import {TuiProgressColorSegments} from './progress-bar/progress-color-segments.directive';
import {TuiProgressCircle} from './progress-circle/progress-circle.component';
import {TuiProgressLabel} from './progress-label/progress-label.component';
import {TuiProgressSegmented} from './progress-segmented/progress-segmented.directive';

export const TuiProgress = [
    TuiProgressBar,
    TuiProgressCircle,
    TuiProgressColorSegments,
    TuiProgressFixedGradientDirective,
    TuiProgressLabel,
    TuiProgressSegmented,
] as const;
