import React from 'react';

interface Props {
  name: string;
  onClick?: () => void;
  classname?: string;
  id?: string;
}

interface Icons {
  [key: string]: JSX.Element | undefined;
}

const Icon: React.FC<Props> = ({name, onClick, classname, id}) => {
  const icons: Icons = {
    shape: (
      <svg width='100%' height='100%' viewBox='0 0 175 102' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path opacity='0.25' d='M175 142.5C175 221.201 111.201 285 32.5 285C-46.2006 285 -110 221.201 -110 142.5C-110 63.7994 -46.2006 0 32.5 0C111.201 0 175 63.7994 175 142.5ZM-61.1995 142.5C-61.1995 194.249 -19.2488 236.2 32.5 236.2C84.2488 236.2 126.2 194.249 126.2 142.5C126.2 90.7512 84.2488 48.8005 32.5 48.8005C-19.2488 48.8005 -61.1995 90.7512 -61.1995 142.5Z' fill='white' />
      </svg>
    ),
    projectIcon: (
      <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path opacity='0.6' d='M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z' fill='#5030E5' />
        <path d='M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z' fill='#5030E5' />
        <path opacity='0.4' d='M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z' fill='#5030E5' />
      </svg>
    ),
    calendar: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 2V5' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M16 2V5' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M3.5 9.09H20.5' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M11.9955 13.7H12.0045' stroke='#E5EAF3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M8.29431 13.7H8.30329' stroke='#E5EAF3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={classname} />
        <path d='M8.29431 16.7H8.30329' stroke='#E5EAF3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={classname} />
      </svg>
    ),
    notiBell: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' className={classname} />
        <path className={classname} d='M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06' stroke='#E5EAF3' strokeWidth='1.5' strokeMiterlimit='10' className={classname} />
        {/* <circle cx="18" cy="4" r="3" fill="#D8727D"/> */}
      </svg>
    ),
    searchIcon: (
      <svg width='20' height='20' viewBox='0 0 94 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M66.8103 37.3103C66.8103 53.3076 53.842 66.2759 37.8448 66.2759C21.8476 66.2759 8.87931 53.3076 8.87931 37.3103C8.87931 21.3131 21.8476 8.34481 37.8448 8.34481C53.842 8.34481 66.8103 21.3131 66.8103 37.3103ZM61.0904 66.4079C54.7194 71.5043 46.638 74.5518 37.8448 74.5518C17.277 74.5518 0.603455 57.8782 0.603455 37.3103C0.603455 16.7425 17.277 0.0689402 37.8448 0.0689402C58.4127 0.0689402 75.0862 16.7425 75.0862 37.3103C75.0862 46.1035 72.0387 54.1849 66.9423 60.556L92.4949 86.1085C94.1109 87.7245 94.1109 90.3445 92.4949 91.9605C90.8789 93.5764 88.2589 93.5764 86.643 91.9605L61.0904 66.4079Z'
          fill='currentColor'
        />
      </svg>
    ),
    dropDown: (
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32C2.17335 6.12667 2.17335 5.80667 2.36668 5.61334C2.56001 5.42 2.88001 5.42 3.07335 5.61334L7.42001 9.96C7.74001 10.28 8.26001 10.28 8.58001 9.96L12.9267 5.61334C13.12 5.42 13.44 5.42 13.6333 5.61334C13.8267 5.80667 13.8267 6.12667 13.6333 6.32L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z'
          fill='#787486'
        />
      </svg>
    ),
    addIcon: (
      <svg onClick={onClick} width='20' height='20' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z' fill='currentColor'></path>
      </svg>
    ),
    discord: (
      <svg width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          className={classname}
          d='M37.8617 11.2829C35.3122 10.1131 32.5783 9.25125 29.7198 8.75762C29.6678 8.7481 29.6158 8.77191 29.589 8.81952C29.2374 9.44488 28.8479 10.2607 28.5752 10.902C25.5007 10.4417 22.442 10.4417 19.4305 10.902C19.1577 10.2465 18.7541 9.44488 18.401 8.81952C18.3741 8.77349 18.3221 8.74969 18.2701 8.75762C15.4132 9.24967 12.6793 10.1115 10.1282 11.2829C10.1061 11.2924 10.0872 11.3083 10.0746 11.3289C4.88899 19.0762 3.46842 26.6331 4.1653 34.0962C4.16845 34.1327 4.18895 34.1676 4.21733 34.1898C7.63868 36.7024 10.9528 38.2278 14.2055 39.2388C14.2575 39.2547 14.3127 39.2356 14.3458 39.1928C15.1152 38.1421 15.8011 37.0342 16.3891 35.8691C16.4238 35.8009 16.3907 35.7199 16.3198 35.6929C15.2319 35.2803 14.196 34.7771 13.1995 34.2057C13.1207 34.1597 13.1144 34.047 13.1869 33.993C13.3966 33.8359 13.6064 33.6724 13.8066 33.5073C13.8428 33.4772 13.8933 33.4708 13.9359 33.4898C20.4821 36.4786 27.5692 36.4786 34.0383 33.4898C34.0808 33.4692 34.1313 33.4756 34.1691 33.5057C34.3694 33.6708 34.5791 33.8359 34.7904 33.993C34.8629 34.047 34.8581 34.1597 34.7793 34.2057C33.7829 34.7882 32.747 35.2803 31.6575 35.6914C31.5866 35.7183 31.555 35.8009 31.5897 35.8691C32.1904 37.0325 32.8763 38.1404 33.6315 39.1912C33.663 39.2356 33.7198 39.2547 33.7718 39.2388C37.0402 38.2278 40.3544 36.7024 43.7757 34.1898C43.8057 34.1676 43.8246 34.1343 43.8278 34.0978C44.6618 25.4696 42.4308 17.9747 37.9137 11.3305C37.9026 11.3083 37.8838 11.2924 37.8617 11.2829ZM17.3667 29.5519C15.3958 29.5519 13.7719 27.7425 13.7719 25.5204C13.7719 23.2982 15.3643 21.4888 17.3667 21.4888C19.3848 21.4888 20.993 23.3141 20.9615 25.5204C20.9615 27.7425 19.369 29.5519 17.3667 29.5519ZM30.6579 29.5519C28.6871 29.5519 27.0632 27.7425 27.0632 25.5204C27.0632 23.2982 28.6556 21.4888 30.6579 21.4888C32.6761 21.4888 34.2842 23.3141 34.2527 25.5204C34.2527 27.7425 32.6761 29.5519 30.6579 29.5519Z'
          fill='#E5EAF3'
        />
      </svg>
    ),
    linkedIn: (
      <svg width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M42 8.64706V39.3529C42 40.055 41.7211 40.7283 41.2247 41.2247C40.7283 41.7211 40.055 42 39.3529 42H8.64706C7.94502 42 7.27173 41.7211 6.77531 41.2247C6.27889 40.7283 6 40.055 6 39.3529V8.64706C6 7.94502 6.27889 7.27173 6.77531 6.77531C7.27173 6.27889 7.94502 6 8.64706 6H39.3529C40.055 6 40.7283 6.27889 41.2247 6.77531C41.7211 7.27173 42 7.94502 42 8.64706ZM16.5882 19.7647H11.2941V36.7059H16.5882V19.7647ZM17.0647 13.9412C17.0675 13.5407 16.9914 13.1436 16.8407 12.7726C16.69 12.4016 16.4677 12.0638 16.1866 11.7787C15.9054 11.4936 15.5707 11.2666 15.2018 11.1108C14.8329 10.955 14.4369 10.8734 14.0365 10.8706H13.9412C13.1268 10.8706 12.3458 11.1941 11.7699 11.7699C11.1941 12.3458 10.8706 13.1268 10.8706 13.9412C10.8706 14.7555 11.1941 15.5366 11.7699 16.1124C12.3458 16.6883 13.1268 17.0118 13.9412 17.0118C14.3417 17.0216 14.7402 16.9525 15.1139 16.8083C15.4877 16.664 15.8293 16.4476 16.1194 16.1713C16.4095 15.895 16.6423 15.5642 16.8045 15.1979C16.9667 14.8316 17.0551 14.437 17.0647 14.0365V13.9412ZM36.7059 26.4141C36.7059 21.3212 33.4659 19.3412 30.2471 19.3412C29.1932 19.2884 28.1438 19.5129 27.2037 19.9922C26.2637 20.4715 25.4657 21.189 24.8894 22.0729H24.7412V19.7647H19.7647V36.7059H25.0588V27.6953C24.9823 26.7725 25.273 25.8567 25.8678 25.1469C26.4625 24.4372 27.3133 23.9908 28.2353 23.9047H28.4365C30.12 23.9047 31.3694 24.9635 31.3694 27.6318V36.7059H36.6635L36.7059 26.4141Z'
          fill='#E5EAF3'
          className={classname}
        />
      </svg>
    ),
    github: (
      <svg width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.0165 4.33325C12.9479 4.33325 4 13.3471 4 24.4985C4 33.4124 9.73324 40.9579 17.6868 43.6284C18.6812 43.8292 19.0454 43.1945 19.0454 42.6607C19.0454 42.1932 19.0126 40.5908 19.0126 38.9211C13.4445 40.1233 12.285 36.5173 12.285 36.5173C11.3902 34.1803 10.0643 33.5796 10.0643 33.5796C8.24185 32.3443 10.197 32.3443 10.197 32.3443C12.2186 32.4779 13.2794 34.4142 13.2794 34.4142C15.0686 37.4855 17.9518 36.6177 19.1118 36.0834C19.2773 34.7813 19.8079 33.8799 20.3713 33.3792C15.9303 32.9118 11.2578 31.1758 11.2578 23.43C11.2578 21.2265 12.0527 19.4237 13.3122 18.0216C13.1134 17.521 12.4173 15.4506 13.5113 12.6797C13.5113 12.6797 15.2014 12.1454 19.0122 14.7496C20.6438 14.3082 22.3263 14.0837 24.0165 14.0818C25.7067 14.0818 27.4295 14.3157 29.0205 14.7496C32.8317 12.1454 34.5218 12.6797 34.5218 12.6797C35.6158 15.4506 34.9192 17.521 34.7205 18.0216C36.0132 19.4237 36.7753 21.2265 36.7753 23.43C36.7753 31.1758 32.1028 32.8782 27.6287 33.3792C28.358 34.0135 28.9873 35.2152 28.9873 37.1184C28.9873 39.8225 28.9545 41.9928 28.9545 42.6603C28.9545 43.1945 29.3192 43.8292 30.3132 43.6288C38.2667 40.9575 43.9999 33.4124 43.9999 24.4985C44.0327 13.3471 35.052 4.33325 24.0165 4.33325Z'
          fill='#E5EAF3'
          className={classname}
        />
      </svg>
    ),
    board: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z'
          fill='currentColor'></path>
      </svg>
    ),
    members: (
      <svg onClick={onClick} width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z' fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z'
          fill='currentColor'></path>
      </svg>
    ),
    settings: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.0017 17.0009C9.23868 17.0009 6.99968 14.7609 6.99968 11.9989C6.99968 9.23586 9.23868 6.99686 12.0017 6.99686C14.7647 6.99686 17.0037 9.23586 17.0037 11.9989C17.0037 14.7609 14.7647 17.0009 12.0017 17.0009ZM20.3697 13.8839C19.5867 13.6119 19.0237 12.8749 19.0237 11.9989C19.0237 11.1229 19.5867 10.3859 20.3687 10.1139C20.6057 10.0319 20.7517 9.78086 20.6837 9.53986C20.4847 8.83586 20.2017 8.16886 19.8477 7.54686C19.7297 7.33886 19.4707 7.26186 19.2497 7.35186C18.8647 7.50986 18.4197 7.55086 17.9587 7.43286C17.2847 7.25886 16.7337 6.70986 16.5557 6.03686C16.4337 5.57386 16.4747 5.12686 16.6317 4.73986C16.7207 4.51986 16.6437 4.26086 16.4357 4.14286C15.8187 3.79386 15.1567 3.51386 14.4607 3.31686C14.2187 3.24886 13.9687 3.39386 13.8867 3.63086C13.6147 4.41386 12.8777 4.97686 12.0017 4.97686C11.1267 4.97686 10.3887 4.41386 10.1177 3.63186C10.0347 3.39486 9.78368 3.24886 9.54268 3.31686C8.83468 3.51686 8.16368 3.80186 7.53868 4.15886C7.33768 4.27386 7.25268 4.52586 7.34068 4.74086C7.48768 5.10186 7.53268 5.51386 7.43868 5.94386C7.28368 6.64986 6.72468 7.24086 6.02568 7.42786C5.56768 7.55086 5.12768 7.51186 4.74568 7.35986C4.52568 7.27186 4.26768 7.34986 4.15068 7.55586C3.79768 8.17786 3.51568 8.84586 3.31768 9.54986C3.24968 9.78886 3.39268 10.0369 3.62568 10.1219C4.39668 10.3999 4.94868 11.1319 4.94868 11.9989C4.94868 12.8659 4.39668 13.5979 3.62468 13.8759C3.39168 13.9599 3.24968 14.2079 3.31668 14.4469C3.49368 15.0739 3.73868 15.6729 4.03968 16.2369C4.15868 16.4589 4.43468 16.5349 4.66368 16.4299C5.25868 16.1569 6.00668 16.1659 6.76768 16.6679C6.88468 16.7449 6.99268 16.8529 7.06968 16.9689C7.59668 17.7679 7.58168 18.5489 7.26768 19.1559C7.15268 19.3789 7.21968 19.6569 7.43568 19.7839C8.08968 20.1679 8.79768 20.4709 9.54468 20.6809C9.78568 20.7489 10.0337 20.6049 10.1147 20.3679C10.3837 19.5819 11.1237 19.0149 12.0017 19.0149C12.8797 19.0149 13.6197 19.5819 13.8887 20.3679C13.9697 20.6039 14.2177 20.7489 14.4587 20.6809C15.1957 20.4739 15.8947 20.1749 16.5427 19.7979C16.7607 19.6709 16.8267 19.3899 16.7097 19.1669C16.3917 18.5589 16.3727 17.7739 16.9007 16.9719C16.9777 16.8559 17.0857 16.7469 17.2027 16.6699C17.9747 16.1589 18.7297 16.1569 19.3277 16.4399C19.5567 16.5479 19.8357 16.4729 19.9557 16.2499C20.2597 15.6859 20.5047 15.0859 20.6837 14.4569C20.7517 14.2159 20.6067 13.9659 20.3697 13.8839Z'
          fill='currentColor'></path>
      </svg>
    ),
    table: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.66683 9.66665C0.93045 9.66665 0.333496 9.06969 0.333496 8.33331V1.66665C0.333496 0.930267 0.93045 0.333313 1.66683 0.333313H12.3335C13.0699 0.333313 13.6668 0.930267 13.6668 1.66665V8.33331C13.6668 9.06969 13.0699 9.66665 12.3335 9.66665H1.66683ZM12.3335 5.66665V4.33331H5.66683V5.66665H12.3335ZM12.3335 2.99998V1.66665H5.66683V2.99998H12.3335ZM12.3335 6.99998V8.33331H5.66683V6.99998H12.3335ZM1.66683 4.33331V5.66665H4.3335V4.33331H1.66683ZM1.66683 6.99998V8.33331H4.3335V6.99998H1.66683ZM1.66683 2.99998V1.66665H4.3335V2.99998H1.66683Z'
          fill='currentColor'></path>
      </svg>
    ),
    calendar2: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 4V5H4.995C3.892 5 3 5.893 3 6.994V19.006C3 20.106 3.893 21 4.995 21H19.005C20.108 21 21 20.107 21 19.006V6.994C21 5.895 20.107 5 19.005 5H18V4C18 3.448 17.552 3 17 3C16.448 3 16 3.448 16 4V5H8V4C8 3.448 7.552 3 7 3C6.448 3 6 3.448 6 4ZM5.25 9.571V17.718C5.25 18.273 5.694 18.714 6.243 18.714H17.758C18.3 18.714 18.75 18.268 18.75 17.718V9.571H5.25ZM9 13V10.999H7V13H9ZM17 10.999V13H15V10.999H17ZM11 13H13.001V10.999H11V13ZM7 17V15H9V17H7ZM11 17H13.001V15H11V17ZM17 15V17H15V15H17Z'
          fill='currentColor'></path>
      </svg>
    ),
    menu: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z'
          fill='currentColor'></path>
      </svg>
    ),
    downarrow: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z' fill='currentColor'></path>
      </svg>
    ),
    addBoard: (
      <svg onClick={onClick} width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z'
          fill='currentColor'></path>
      </svg>
    ),
    addWorkspace: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.5048 5.67168C11.9099 5.32669 11.2374 5.10082 10.5198 5.0267C11.2076 3.81639 12.5085 3 14 3C16.2092 3 18 4.79086 18 7C18 7.99184 17.639 8.89936 17.0413 9.59835C19.9512 10.7953 22 13.6584 22 17C22 17.5523 21.5523 18 21 18H18.777C18.6179 17.2987 18.3768 16.6285 18.0645 16H19.917C19.4892 13.4497 17.4525 11.445 14.8863 11.065C14.9608 10.7218 15 10.3655 15 10C15 9.58908 14.9504 9.18974 14.857 8.80763C15.5328 8.48668 16 7.79791 16 7C16 5.89543 15.1046 5 14 5C13.4053 5 12.8711 5.25961 12.5048 5.67168ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM14 10C14 10.9918 13.639 11.8994 13.0412 12.5984C15.9512 13.7953 18 16.6584 18 20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20C2 16.6584 4.04879 13.7953 6.95875 12.5984C6.36099 11.8994 6 10.9918 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM9.99999 14C12.973 14 15.441 16.1623 15.917 19H4.08295C4.55902 16.1623 7.02699 14 9.99999 14Z'
          fill='currentColor'></path>
      </svg>
    ),
    threeDots: (
      <svg width='24' height='24' viewBox='0 0 24 24' role='presentation'>
        <g fill='currentColor' fillRule='evenodd'>
          <circle cx='12' cy='19' r='2'></circle>
          <circle cx='12' cy='12' r='2'></circle>
          <circle cx='12' cy='5' r='2'></circle>
        </g>
      </svg>
    ),

    star: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          className={classname}
          clipRule='evenodd'
          d='M7.49495 20.995L11.9999 18.6266L16.5049 20.995C16.8059 21.1533 17.1507 21.2079 17.4859 21.1504C18.3276 21.006 18.893 20.2066 18.7486 19.3649L17.8882 14.3485L21.5328 10.7959C21.7763 10.5585 21.9348 10.2475 21.9837 9.91094C22.1065 9.06576 21.5209 8.28106 20.6758 8.15825L15.6391 7.42637L13.3866 2.86236C13.2361 2.55739 12.9892 2.31054 12.6843 2.16003C11.9184 1.78206 10.9912 2.0965 10.6132 2.86236L8.36072 7.42637L3.32403 8.15825C2.98747 8.20715 2.67643 8.36564 2.43904 8.60917C1.84291 9.22074 1.85542 10.1998 2.46699 10.7959L6.11158 14.3485L5.25121 19.3649C5.19372 19.7 5.24833 20.0448 5.40658 20.3459C5.80401 21.1018 6.739 21.3924 7.49495 20.995ZM19.3457 10.0485L15.6728 13.6287L16.5398 18.684L11.9999 16.2972L7.45995 18.684L8.327 13.6287L4.65411 10.0485L9.72993 9.31093L11.9999 4.71146L14.2699 9.31093L19.3457 10.0485Z'
          fill='currentColor'></path>
      </svg>
    ),
    groupVis: (
      <svg id={id} width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.5048 5.67168C11.9099 5.32669 11.2374 5.10082 10.5198 5.0267C11.2076 3.81639 12.5085 3 14 3C16.2092 3 18 4.79086 18 7C18 7.99184 17.639 8.89936 17.0413 9.59835C19.9512 10.7953 22 13.6584 22 17C22 17.5523 21.5523 18 21 18H18.777C18.6179 17.2987 18.3768 16.6285 18.0645 16H19.917C19.4892 13.4497 17.4525 11.445 14.8863 11.065C14.9608 10.7218 15 10.3655 15 10C15 9.58908 14.9504 9.18974 14.857 8.80763C15.5328 8.48668 16 7.79791 16 7C16 5.89543 15.1046 5 14 5C13.4053 5 12.8711 5.25961 12.5048 5.67168ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM14 10C14 10.9918 13.639 11.8994 13.0412 12.5984C15.9512 13.7953 18 16.6584 18 20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20C2 16.6584 4.04879 13.7953 6.95875 12.5984C6.36099 11.8994 6 10.9918 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM9.99999 14C12.973 14 15.441 16.1623 15.917 19H4.08295C4.55902 16.1623 7.02699 14 9.99999 14Z'
          fill='currentColor'></path>
      </svg>
    ),
    verticalDots: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z'
          fill='currentColor'></path>
      </svg>
    ),
    arrowRight: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.7071 12.7071L9.63606 19.7781C9.24554 20.1687 8.61237 20.1687 8.22185 19.7781C7.83132 19.3876 7.83132 18.7544 8.22185 18.3639L14.5858 12L8.22185 5.636C7.83132 5.24548 7.83132 4.61231 8.22185 4.22179C8.61237 3.83126 9.24554 3.83126 9.63606 4.22179L16.7071 11.2929C17.0977 11.6834 17.0977 12.3165 16.7071 12.7071Z' fill='currentColor'></path>
      </svg>
    ),
    bin: (
      <svg width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.902 25.603V22.8278C11.902 20.8173 11.2499 18.8611 10.0436 17.2527V17.2527C8.38971 15.0475 9.96317 11.9006 12.7197 11.9006H34.5741C37.3306 11.9006 38.904 15.0475 37.2501 17.2527V17.2527C36.0438 18.8611 35.3918 20.8173 35.3918 22.8278V35.3904C35.3918 39.7147 31.8862 43.2203 27.5618 43.2203H19.7319C15.4075 43.2203 11.902 39.7147 11.902 35.3904V33.4329'
          stroke='currentColor'
          strokeWidth='2.93622'
          strokeLinecap='round'
        />
        <path d='M27.5609 33.4331L27.5609 21.6882' stroke='currentColor' strokeWidth='2.93622' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M19.7314 33.4331L19.7314 21.6882' stroke='currentColor' strokeWidth='2.93622' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M28.8085 6.64592C28.1928 6.25165 27.4648 6.0282 26.6977 6.0282H20.5963C19.8292 6.0282 19.1013 6.25165 18.4856 6.64592' stroke='currentColor' strokeWidth='2.93622' strokeLinecap='round' />
      </svg>
    ),
    starYellow: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          className={classname}
          d='M11.9999 18.6266L7.49495 20.995C6.739 21.3924 5.80401 21.1018 5.40658 20.3459C5.24833 20.0448 5.19372 19.7 5.25121 19.3649L6.11158 14.3485L2.46699 10.7959C1.85542 10.1998 1.84291 9.22074 2.43904 8.60917C2.67643 8.36564 2.98747 8.20715 3.32403 8.15825L8.36072 7.42637L10.6132 2.86236C10.9912 2.0965 11.9184 1.78206 12.6843 2.16003C12.9892 2.31054 13.2361 2.55739 13.3866 2.86236L15.6391 7.42637L20.6758 8.15825C21.5209 8.28106 22.1065 9.06576 21.9837 9.91094C21.9348 10.2475 21.7763 10.5585 21.5328 10.7959L17.8882 14.3485L18.7486 19.3649C18.893 20.2066 18.3276 21.006 17.4859 21.1504C17.1507 21.2079 16.8059 21.1533 16.5049 20.995L11.9999 18.6266Z'
          fill='currentColor'></path>
      </svg>
    ),
    cancel: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z'
          fill='currentColor'></path>
      </svg>
    ),
    edit: (
      <svg width='20' height='20' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.82034 14.4893L9.94134 16.6103L18.4303 8.12131L16.3093 6.00031H16.3073L7.82034 14.4893ZM17.7233 4.58531L19.8443 6.70731C20.6253 7.48831 20.6253 8.7543 19.8443 9.53531L10.0873 19.2933L5.13734 14.3433L14.8943 4.58531C15.2853 4.19531 15.7973 4.00031 16.3093 4.00031C16.8203 4.00031 17.3323 4.19531 17.7233 4.58531ZM5.20094 20.4097C4.49794 20.5537 3.87694 19.9327 4.02094 19.2297L4.80094 15.4207L9.00994 19.6297L5.20094 20.4097Z'
          fill='!currentColor'></path>
      </svg>
    ),
    archive: (
      <svg width='20' height='20' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.03418 5.59621C2.98604 5.04603 3.39303 4.56099 3.94322 4.51286L19.8823 3.11837C20.4325 3.07023 20.9175 3.47722 20.9657 4.02741L21.0528 5.0236L3.12133 6.5924L3.03418 5.59621Z' fill='currentColor'></path>
        <path d='M9 12.9999C9 12.4476 9.44772 11.9999 10 11.9999H14C14.5523 11.9999 15 12.4476 15 12.9999C15 13.5522 14.5523 13.9999 14 13.9999H10C9.44772 13.9999 9 13.5522 9 12.9999Z' fill='currentColor'></path>
        <path fillRule='evenodd' clipRule='evenodd' d='M3 18.9999V7.99993H21V18.9999C21 20.1045 20.1046 20.9999 19 20.9999H5C3.89543 20.9999 3 20.1045 3 18.9999ZM5 9.99993H19V18.9999H5L5 9.99993Z' fill='currentColor'></path>
      </svg>
    ),

    editCard: (
      <svg width='20' height='20' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.1213 2.80762C12.3403 2.02657 11.0739 2.02657 10.2929 2.80762L3.92891 9.17158C1.19524 11.9052 1.19524 16.3374 3.92891 19.0711C6.66258 21.8047 11.0947 21.8047 13.8284 19.0711L20.1924 12.7071C20.9734 11.9261 20.9734 10.6597 20.1924 9.87869L13.1213 2.80762ZM18.7782 11.2929L11.7071 4.22183L5.34313 10.5858C3.39051 12.5384 3.39051 15.7042 5.34313 17.6569C7.29575 19.6095 10.4616 19.6095 12.4142 17.6569L18.7782 11.2929ZM10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14ZM12 14C12 15.6569 10.6569 17 9 17C7.34315 17 6 15.6569 6 14C6 12.3431 7.34315 11 9 11C10.6569 11 12 12.3431 12 14Z'
          fill='currentColor'></path>
      </svg>
    ),
    privateSymbol: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M5 11C5 9.89543 5.89543 9 7 9H8H10H14H16H17C18.1046 9 19 9.89543 19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V11ZM10 11H14H16H17V19H7V11H8H10ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z' fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.3817 5.69846C10.0982 6.10344 10 6.63103 10 7V9H8V7C8 6.36897 8.15175 5.39656 8.74327 4.55154C9.37523 3.64874 10.4367 3 12 3C13.5633 3 14.6248 3.64874 15.2567 4.55154C15.8482 5.39656 16 6.36897 16 7V9H14V7C14 6.63103 13.9018 6.10344 13.6183 5.69846C13.3752 5.35126 12.9367 5 12 5C11.0633 5 10.6248 5.35126 10.3817 5.69846Z'
          fill='currentColor'></path>
      </svg>
    ),
    publicSymbol: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11 18.9291V18C11 17.4477 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V15L5.06227 11.0623C5.0212 11.369 5 11.682 5 12C5 15.5265 7.60771 18.4439 11 18.9291ZM14.9929 5.67024C14.9065 6.69513 14.0472 7.5 13 7.5H11V9C11 9.55228 10.5523 10 10 10H8V12H13C14.1046 12 15 12.8954 15 14V16H16C16.5198 16 16.9469 16.3966 16.9954 16.9037C18.2353 15.6407 19 13.9097 19 12C19 9.20479 17.3617 6.79224 14.9929 5.67024ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
          fill='currentColor'></path>
      </svg>
    ),
    tickSymbol: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.73534 12.3223C6.36105 11.9162 5.72841 11.8904 5.3223 12.2647C4.91619 12.639 4.89039 13.2716 5.26467 13.6777L8.87678 17.597C9.41431 18.1231 10.2145 18.1231 10.7111 17.6264C10.7724 17.5662 10.7724 17.5662 11.0754 17.2683C11.3699 16.9785 11.6981 16.6556 12.0516 16.3075C13.0614 15.313 14.0713 14.3169 15.014 13.3848L15.0543 13.3449C16.7291 11.6887 18.0004 10.4236 18.712 9.70223C19.0998 9.30904 19.0954 8.67589 18.7022 8.28805C18.309 7.90022 17.6759 7.90457 17.2881 8.29777C16.5843 9.01131 15.3169 10.2724 13.648 11.9228L13.6077 11.9626C12.6662 12.8937 11.6572 13.8889 10.6483 14.8825C10.3578 15.1685 10.0845 15.4375 9.83288 15.6851L6.73534 12.3223Z'
          fill='currentColor'></path>
      </svg>
    ),
    description: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z'
          fill='currentColor'></path>
      </svg>
    ),
    comments: (
      <svg width='24' height='24' role='presentation' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z'
          fill='currentColor'></path>
      </svg>
    ),
  };

  return icons[name] || 'X';
};

export default Icon;