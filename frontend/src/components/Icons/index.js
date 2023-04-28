/* eslint-disable react/jsx-key */
import { Icon } from '@chakra-ui/icons'

export const ToastWarningIcon = (props) => (
    <Icon width="26" height="25" viewBox="0 0 26 25" fill="none" stroke={props.color} {...props}>
      <path
        d="M13.0227 23.0623C19.1446 23.0623 24.1074 18.0995 24.1074 11.9775C24.1074 5.85562 19.1446 0.892822 13.0227 0.892822C6.90079 0.892822 1.93799 5.85562 1.93799 11.9775C1.93799 18.0995 6.90079 23.0623 13.0227 23.0623Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.0229 6.00879V11.1248" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.0231 17.0935C13.494 17.0935 13.8758 16.7118 13.8758 16.2409C13.8758 15.7699 13.494 15.3882 13.0231 15.3882C12.5522 15.3882 12.1704 15.7699 12.1704 16.2409C12.1704 16.7118 12.5522 17.0935 13.0231 17.0935Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )

  export const ToastSuccessIcon = (props) => (
    <Icon width="26" height="25" viewBox="0 0 26 25" fill="none" stroke={props.color} {...props}>
      <path
        d="M8.04785 13.6508L11.432 16.3581C11.5229 16.4329 11.6293 16.4866 11.7435 16.5151C11.8577 16.5437 11.9769 16.5464 12.0923 16.5232C12.2088 16.5013 12.3193 16.4546 12.4161 16.3862C12.513 16.3179 12.594 16.2294 12.6536 16.127L17.9526 7.04761"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0002 22.7301C18.9263 22.7301 23.7303 17.926 23.7303 11.9999C23.7303 6.07383 18.9263 1.26978 13.0002 1.26978C7.07408 1.26978 2.27002 6.07383 2.27002 11.9999C2.27002 17.926 7.07408 22.7301 13.0002 22.7301Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )

  export const ToastErrorIcon = (props) => (
    <Icon width="26" height="25" viewBox="0 0 26 25" fill="none" stroke={props.color} {...props}>
      <g clipPath="url(#clip0_3432_13084)">
        <path
          d="M13 24.375C19.2822 24.375 24.375 19.2822 24.375 13C24.375 6.71776 19.2822 1.625 13 1.625C6.71776 1.625 1.625 6.71776 1.625 13C1.625 19.2822 6.71776 24.375 13 24.375Z"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path d="M16.25 9.6416L9.75 16.1416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.25 16.1416L9.75 9.6416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_3432_13084">
          <rect width="26" height="26" fill="white" transform="translate(0 -1)" />
        </clipPath>
      </defs>
    </Icon>
  )

  export const CloseIcon = (props) => (
    <Icon width="9" height="8" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.2433 6.34314L6.34383 16.2426C5.9533 16.6332 5.9533 17.2663 6.34383 17.6568C6.73435 18.0474 7.36751 18.0474 7.75804 17.6568L17.6575 7.75735C18.0481 7.36682 18.0481 6.73366 17.6575 6.34314C17.267 5.95261 16.6338 5.95261 16.2433 6.34314Z" />
      <path d="M17.6574 16.2426L7.75789 6.34315C7.36736 5.95263 6.7342 5.95263 6.34367 6.34315C5.95315 6.73368 5.95315 7.36684 6.34367 7.75737L16.2432 17.6569C16.6337 18.0474 17.2669 18.0474 17.6574 17.6569C18.0479 17.2663 18.0479 16.6332 17.6574 16.2426Z" />
    </Icon>
  )

  export const EyeViewOff = ({ color, ...props }) => (
    <Icon width="4" height="4" viewBox="0 0 14 14" fill="none" stroke={color} {...props}>
      <path
        d="M12.2896 5.3999C12.6696 5.7399 12.9896 6.0699 13.2296 6.3299C13.3954 6.51365 13.4872 6.75238 13.4872 6.9999C13.4872 7.24742 13.3954 7.48615 13.2296 7.6699C12.1796 8.7999 9.78961 10.9999 6.99961 10.9999H6.59961"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86936 10.13C2.71099 9.48125 1.66433 8.65067 0.769358 7.67C0.603518 7.48625 0.511719 7.24752 0.511719 7C0.511719 6.75248 0.603518 6.51375 0.769358 6.33C1.81936 5.2 4.20936 3 6.99936 3C8.09913 3.02299 9.17547 3.32216 10.1294 3.87"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 1.5L1.5 12.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.59 8.41C5.21441 8.03665 5.00223 7.52958 5 7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5C7.52958 5.00223 8.03665 5.21441 8.41 5.59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.74 8C8.56198 8.3043 8.3067 8.55614 8 8.73" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

export const EyeView = ({ color, ...props }) => (
    <Icon width="4" height="4" viewBox="0 0 16 16" fill="none" stroke={color} {...props}>
      <path
        d="M15.1184 7.23394C15.308 7.44394 15.4129 7.71677 15.4129 7.99965C15.4129 8.28253 15.308 8.55536 15.1184 8.76537C13.9184 10.0568 11.187 12.5711 7.99843 12.5711C4.80986 12.5711 2.07843 10.0568 0.878429 8.76537C0.688897 8.55536 0.583984 8.28253 0.583984 7.99965C0.583984 7.71677 0.688897 7.44394 0.878429 7.23394C2.07843 5.94251 4.80986 3.42822 7.99843 3.42822C11.187 3.42822 13.9184 5.94251 15.1184 7.23394Z"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99958 10.2853C9.26195 10.2853 10.2853 9.26195 10.2853 7.99958C10.2853 6.73722 9.26195 5.71387 7.99958 5.71387C6.73722 5.71387 5.71387 6.73722 5.71387 7.99958C5.71387 9.26195 6.73722 10.2853 7.99958 10.2853Z"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
)

  export const PasswordValidationIcon = ({ color, ...props }) => (
    <Icon width="10" height="11" viewBox="0 0 10 11" fill="none" stroke={color} {...props}>
      <g clipPath="url(#clip0_3774_30792)">
        <path
          d="M2.85938 6.21359L4.32366 7.38502C4.36299 7.4174 4.40903 7.44062 4.45846 7.45297C4.50788 7.46533 4.55944 7.46651 4.60937 7.45644C4.65979 7.44699 4.70758 7.42678 4.74949 7.3972C4.79139 7.36762 4.82644 7.32936 4.85223 7.28502L7.14509 3.35645"
          strokeWidth="0.714286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.00223 10.1422C7.56641 10.1422 9.64509 8.06348 9.64509 5.4993C9.64509 2.93512 7.56641 0.856445 5.00223 0.856445C2.43805 0.856445 0.359375 2.93512 0.359375 5.4993C0.359375 8.06348 2.43805 10.1422 5.00223 10.1422Z"
          strokeWidth="0.714286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3774_30792">
          <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </Icon>
  )

  export const InfoIcon = (props) => (
    <Icon width="21" height="20" viewBox="0 0 21 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7135 17.0513C14.6079 17.0513 17.7648 13.8943 17.7648 9.99998C17.7648 6.10566 14.6079 2.9487 10.7135 2.9487C6.81923 2.9487 3.66226 6.10566 3.66226 9.99998C3.66226 13.8943 6.81923 17.0513 10.7135 17.0513ZM19.0469 9.99998C19.0469 14.6024 15.3159 18.3333 10.7135 18.3333C6.11117 18.3333 2.38021 14.6024 2.38021 9.99998C2.38021 5.3976 6.11117 1.66664 10.7135 1.66664C15.3159 1.66664 19.0469 5.39761 19.0469 9.99998Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7135 13.6325C10.3595 13.6325 10.0725 13.3455 10.0725 12.9914L10.0725 9.57263C10.0725 9.2186 10.3595 8.9316 10.7135 8.9316C11.0676 8.9316 11.3546 9.2186 11.3546 9.57263L11.3546 12.9914C11.3546 13.3455 11.0676 13.6325 10.7135 13.6325Z"
      />
      <path d="M9.85884 7.00853C9.85884 6.53649 10.2415 6.15382 10.7135 6.15383C11.1856 6.15383 11.5682 6.53649 11.5682 7.00853C11.5682 7.48056 11.1856 7.86323 10.7135 7.86323C10.2415 7.86323 9.85884 7.48056 9.85884 7.00853Z" />
    </Icon>
  )

  export const Logout = ({ ...props }) => (
    <Icon viewBox="0 0 14 14" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.5,10.5v2a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1V1.5a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v2" />
      <line x1="6.5" y1="7" x2="13.5" y2="7" />
      <polyline points="11.5 5 13.5 7 11.5 9" />
    </Icon>
  )

  export const ArrowDownIcon = ({ color, ...props }) => (
    <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} {...props}>
      <path d="M12.8901 6L7.93237 11L2.97461 6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

  export const ProfileIcon = (props) => (
    <Icon viewBox="0 0 20 20" stroke="currentColor" {...props} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9.87506C12.1747 9.87506 13.9376 8.11217 13.9376 5.93753C13.9376 3.76289 12.1747 2 10 2C7.82539 2 6.0625 3.76289 6.0625 5.93753C6.0625 8.11217 7.82539 9.87506 10 9.87506Z" />
      <path d="M17.0001 17.7502C16.3376 16.4648 15.3339 15.3866 14.0992 14.6338C12.8644 13.8811 11.4462 13.4829 10.0001 13.4829C8.55393 13.4829 7.13572 13.8811 5.90095 14.6338C4.66617 15.3866 3.6625 16.4648 3 17.7502" />
    </Icon>
  )

  export const ListIcon = (props) => (
    <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" {...props}>
      <path
        d="M13.5717 2.14258H15.7146C16.0934 2.14258 16.4568 2.29309 16.7247 2.561C16.9926 2.82891 17.1431 3.19227 17.1431 3.57115V17.8569C17.1431 18.2357 16.9926 18.5991 16.7247 18.867C16.4568 19.1349 16.0934 19.2854 15.7146 19.2854H4.28599C3.90711 19.2854 3.54375 19.1349 3.27584 18.867C3.00793 18.5991 2.85742 18.2357 2.85742 17.8569V3.57115C2.85742 3.19227 3.00793 2.82891 3.27584 2.561C3.54375 2.29309 3.90711 2.14258 4.28599 2.14258H6.42885"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.143 0.714844H7.85728C7.0683 0.714844 6.42871 1.35444 6.42871 2.14342V2.8577C6.42871 3.64668 7.0683 4.28627 7.85728 4.28627H12.143C12.932 4.28627 13.5716 3.64668 13.5716 2.8577V2.14342C13.5716 1.35444 12.932 0.714844 12.143 0.714844Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.42871 7.85742H13.5716" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.42871 11.4297H13.5716" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.42871 15H13.5716" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

  export const DashboardIcon = (props) => (
    <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" {...props}>
      <path d="M1 9.28565L10.2857 -6.10352e-05L19.5714 9.28565" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.85938 11.4285V18.5714H16.7165V11.4285" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

  export const QuestionInCircleIcon = ({ color = 'currentColor', ...props }) => (
    <Icon width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={color} {...props}>
      <path
        d="M13 24.782C19.6274 24.782 25 19.4582 25 12.891C25 6.32379 19.6274 1 13 1C6.37258 1 1 6.32379 1 12.891C1 19.4582 6.37258 24.782 13 24.782Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2266 10.1463C10.2266 9.60361 10.389 9.07307 10.6933 8.6218C10.9975 8.17054 11.43 7.81883 11.9361 7.61113C12.4421 7.40344 12.9989 7.3491 13.536 7.45498C14.0732 7.56086 14.5667 7.82221 14.9539 8.20598C15.3412 8.58974 15.605 9.07869 15.7118 9.61099C15.8187 10.1433 15.7638 10.695 15.5542 11.1964C15.3446 11.6979 14.9897 12.1264 14.5343 12.428C14.0789 12.7295 13.5435 12.8904 12.9958 12.8904V14.7198"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6466 18.3228C12.7498 18.2545 12.8716 18.2172 12.997 18.2163C13.1675 18.2197 13.3289 18.2884 13.4477 18.4061C13.5661 18.5235 13.633 18.6802 13.6364 18.8432C13.6354 18.963 13.5992 19.0805 13.5312 19.1812C13.4623 19.2835 13.3636 19.3641 13.2469 19.4121L13.5091 20.051L13.2469 19.4121C13.1301 19.46 13.0012 19.4727 12.8767 19.4481C12.7523 19.4236 12.639 19.3632 12.5506 19.2757C12.4624 19.1883 12.4031 19.0777 12.3791 18.9584C12.3552 18.839 12.3674 18.7153 12.4146 18.6025C12.4618 18.4896 12.5421 18.392 12.6466 18.3228Z"
        strokeWidth="1.5"
      />
    </Icon>
  )

  export const ButlerIcon = ({ color = 'currentColor', ...props }) => (
    <Icon width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={color} {...props}>
     <path
        xmlns="http://www.w3.org/2000/svg"
        d="M68.7,29.6L68.7,29.6c-0.3-1.7-1.2-3.3-3.5-4.1l-8.6-3.6c0.1-0.1,0.1-0.3,0-0.5l-1.4-1.7c-0.1-0.1-0.3-0.2-0.4-0.1v-2.9  c0.9-1.1,1.5-2.5,1.5-4V8.1c0-3.5-2.8-6.3-6.3-6.3c-3.5,0-6.3,2.8-6.3,6.3v4.6c0,1.5,0.5,2.8,1.4,3.9v3c-0.1,0-0.2,0-0.3,0.1  l-1.4,1.7c-0.1,0.1-0.1,0.3-0.1,0.4l-9.1,3.9c-4.7,2-2.7,8.3-2.7,8.3l3.2,18.8c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.3  l0.6,3.7c0,0.2,0.2,0.4,0.4,0.4H36c0.2,1.3,0.9,3.3,3.3,3.5l4.4,32.9l-6.1,3.8h12.3h12.3l-6.1-3.8l3.6-27.4h1.4  c0.2,0,0.4-0.2,0.4-0.4v-1.9h2.2l-1-11.4l0.8-2.5H64c2.6,0,4.7-2.1,4.7-4.7V32.4C68.8,31.6,68.8,30.6,68.7,29.6z M35.1,53.6h2.8  l0.4,2.8h-2.8L35.1,53.6z M48.3,43.4v6.5h-3.1v-6.5H48.3z M55.6,21.7l-3.9,6.9L51,26.4l0.6-1.7l-1.6-1.8l4.5-2.4L55.6,21.7z   M44.9,20.5l4.5,2.4l-1.6,1.8l0.6,1.7l-0.7,2.2L44,21.7L44.9,20.5z M60.5,65.6h-9.8V43.4h9.8V65.6z"
      />
    </Icon>
  )

  export const EditPenIcon = (props) => (
    <Icon
      viewBox="0 0 15 15"
      width="15"
      height="15"
      stroke="currentColor"
      fill="none"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g>
        <path d="M5.5,12.5a2.72,2.72,0,0,0,0-4,2.72,2.72,0,0,0-4,0c-1,1-1,5-1,5S4.5,13.5,5.5,12.5Z" />
        <path d="M12.92,1.08A2,2,0,0,0,10.28.93L4.5,5,3.79,7.64A2.87,2.87,0,0,1,5.5,8.5a2.87,2.87,0,0,1,.86,1.71L9,9.5l4.07-5.78A2,2,0,0,0,12.92,1.08Z" />
        <line x1="0.5" y1="13.5" x2="3.75" y2="10.25" />
      </g>
    </Icon>
  )

  export const ArrowDown = ({ color, ...props }) => (
    <Icon width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={color} {...props}>
      <path
        d="M21.2162 13.9922L15.9279 19.0118L10.6396 13.9922"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )

  export const InterfaceCalendar = ({ color, ...props }) => (
    <Icon viewBox="0 0 14 14" fill="none" stroke={color} {...props}>
      <path
        d="M1.5,2.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1v-9a1,1,0,0,0-1-1h-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0.5" y1="6.5" x2="13.5" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3.5" y1="0.5" x2="3.5" y2="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10.5" y1="0.5" x2="10.5" y2="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3.5" y1="2.5" x2="8.5" y2="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

  export const PlusInCircleIcon = ({ color, ...props }) => (
    <Icon width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={color} {...props}>
      <path
        d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 7.76953V14.2311" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.77344 11H14.235" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )

  export const ButtonRightArrow = ({ color, ...props }) => (
    <Icon width="16" height="12" viewBox="0 0 16 12" fill="none" stroke={color} {...props}>
      <path d="M1.02539 6H14.696" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.0156 11L14.6962 6L11.0156 1" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )
