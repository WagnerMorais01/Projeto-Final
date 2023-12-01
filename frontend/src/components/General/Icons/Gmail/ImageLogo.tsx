import { memo, SVGProps } from 'react';

const ImageLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.63636 18.0022H5.45456V8.72948L2.95434 4.36364L0 4.63856V16.3658C0 17.2699 0.732281 18.0022 1.63636 18.0022Z'
      fill='#0085F7'
    />
    <path
      d='M18.5447 18.0022H22.3629C23.267 18.0022 23.9993 17.2699 23.9993 16.3658V4.63856L21.0492 4.36364L18.5448 8.72948V18.0022H18.5447Z'
      fill='#00A94B'
    />
    <path
      d='M18.5454 1.63856L16.3026 5.91839L18.5454 8.72948L23.9999 4.63856V2.45676C23.9999 0.434481 21.6913 -0.720519 20.0727 0.493121L18.5454 1.63856Z'
      fill='#FFBC00'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.4541 8.72949L3.31693 4.21495L5.4541 1.63856L11.9995 6.54764L18.545 1.63856V8.72949L11.9995 13.6386L5.4541 8.72949Z'
      fill='#FF4131'
    />
    <path
      d='M0 2.45676V4.63856L5.45456 8.72948V1.63856L3.92728 0.493121C2.30864 -0.720519 0 0.434481 0 2.45676H0Z'
      fill='#E51C19'
    />
  </svg>
);
const Memo = memo(ImageLogo);
export { Memo as GroupIcon };
