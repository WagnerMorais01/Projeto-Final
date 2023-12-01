import { memo, SVGProps } from 'react';

const ImageLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.67109 11.4688L10.2031 8H6.875V5.75C6.875 4.80102 7.34 3.875 8.83063 3.875H10.3438V0.921875C10.3438 0.921875 8.97055 0.6875 7.65758 0.6875C4.91656 0.6875 3.125 2.34875 3.125 5.35625V8H0.078125V11.4688H3.125V19.8542C4.36744 20.0486 5.63256 20.0486 6.875 19.8542V11.4688H9.67109Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(ImageLogo);
export { Memo as VectorIcon2 };
