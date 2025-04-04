import { JSX, SVGProps } from "react";

export const AlchemyTwoToneLogo = ({
  fill,
  textColor,
  logoColor,
  ...props
}: JSX.IntrinsicAttributes &
  SVGProps<SVGSVGElement> & {
    textColor?: string;
    logoColor?: string;
  }) => (
  <svg
    width="352"
    height="40"
    viewBox="0 0 352 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M147.893 21.0263V20.6513C147.893 19.7088 147.57 18.9875 146.925 18.4875C146.3 17.9681 145.479 17.7085 144.462 17.7085C143.68 17.7085 143.065 17.8431 142.615 18.1124C142.185 18.3624 141.774 18.7471 141.383 19.2664C141.266 19.4203 141.139 19.5261 141.002 19.5838C140.865 19.6415 140.68 19.6703 140.445 19.6703H139.565C139.35 19.6703 139.155 19.5934 138.979 19.4395C138.823 19.2857 138.754 19.1029 138.774 18.8914C138.832 18.3144 139.116 17.7469 139.624 17.1892C140.152 16.6121 140.846 16.1409 141.706 15.7755C142.566 15.41 143.485 15.2273 144.462 15.2273C146.28 15.2273 147.746 15.7274 148.861 16.7275C149.994 17.7277 150.561 19.1318 150.561 20.9398V29.7393C150.561 29.9509 150.483 30.1336 150.327 30.2875C150.17 30.4414 149.985 30.5183 149.77 30.5183H148.685C148.47 30.5183 148.284 30.4414 148.128 30.2875C147.971 30.1336 147.893 29.9509 147.893 29.7393V28.5564C147.58 29.2489 146.916 29.797 145.899 30.201C144.883 30.6049 143.866 30.8068 142.85 30.8068C141.853 30.8068 140.963 30.6337 140.181 30.2875C139.399 29.9221 138.793 29.4316 138.363 28.8161C137.953 28.2006 137.747 27.5082 137.747 26.7388C137.747 25.2963 138.295 24.1711 139.389 23.3633C140.484 22.5362 141.941 21.9784 143.759 21.6899L147.893 21.0263ZM147.893 23.3344L144.433 23.8826C143.162 24.0749 142.175 24.3923 141.471 24.8347C140.768 25.2578 140.416 25.7964 140.416 26.4503C140.416 26.9312 140.641 27.3639 141.09 27.7486C141.54 28.1333 142.224 28.3256 143.143 28.3256C144.55 28.3256 145.694 27.9313 146.573 27.1427C147.453 26.3542 147.893 25.3251 147.893 24.0557V23.3344Z"
      className="fill-fg-primary"
    />
    <path
      d="M157.508 29.7393C157.508 29.9509 157.43 30.1336 157.273 30.2875C157.117 30.4414 156.931 30.5183 156.716 30.5183H155.631C155.416 30.5183 155.23 30.4414 155.074 30.2875C154.918 30.1336 154.839 29.9509 154.839 29.7393V10.8131C154.839 10.6015 154.918 10.4188 155.074 10.2649C155.23 10.1111 155.416 10.0341 155.631 10.0341H156.716C156.931 10.0341 157.117 10.1111 157.273 10.2649C157.43 10.4188 157.508 10.6015 157.508 10.8131V29.7393Z"
      className="fill-fg-primary"
    />
    <path
      d="M168.07 28.3256C170.025 28.3256 171.345 27.5755 172.029 26.0753C172.166 25.7868 172.302 25.5848 172.439 25.4694C172.576 25.354 172.762 25.2963 172.996 25.2963H173.876C174.091 25.2963 174.277 25.3732 174.433 25.5271C174.59 25.6617 174.668 25.8252 174.668 26.0176C174.668 26.6715 174.404 27.3736 173.876 28.1237C173.348 28.8738 172.586 29.5085 171.589 30.0278C170.592 30.5472 169.419 30.8068 168.07 30.8068C166.682 30.8068 165.48 30.5183 164.463 29.9413C163.447 29.3643 162.665 28.5757 162.118 27.5755C161.57 26.5561 161.267 25.4213 161.209 24.1711C161.189 23.9403 161.179 23.4979 161.179 22.844C161.179 22.3823 161.189 22.0554 161.209 21.863C161.385 19.9012 162.059 18.3047 163.232 17.0738C164.405 15.8428 166.018 15.2273 168.07 15.2273C169.419 15.2273 170.582 15.487 171.56 16.0063C172.557 16.5064 173.309 17.1315 173.817 17.8816C174.345 18.6125 174.629 19.3049 174.668 19.9589C174.687 20.1704 174.609 20.3532 174.433 20.507C174.277 20.6609 174.091 20.7378 173.876 20.7378H172.996C172.762 20.7378 172.576 20.6801 172.439 20.5647C172.302 20.4493 172.166 20.2474 172.029 19.9589C171.345 18.4586 170.025 17.7085 168.07 17.7085C166.995 17.7085 166.057 18.0643 165.255 18.776C164.454 19.4876 163.994 20.5647 163.877 22.0073C163.857 22.2188 163.848 22.5651 163.848 23.0459C163.848 23.4883 163.857 23.8153 163.877 24.0268C164.014 25.4694 164.473 26.5465 165.255 27.2582C166.057 27.9698 166.995 28.3256 168.07 28.3256Z"
      className="fill-fg-primary"
    />
    <path
      d="M191.724 29.7393C191.724 29.9509 191.646 30.1336 191.49 30.2875C191.333 30.4414 191.148 30.5183 190.933 30.5183H189.848C189.633 30.5183 189.447 30.4414 189.291 30.2875C189.134 30.1336 189.056 29.9509 189.056 29.7393V22.1227C189.056 20.6801 188.694 19.5838 187.971 18.8337C187.248 18.0835 186.241 17.7085 184.951 17.7085C183.68 17.7085 182.673 18.0835 181.931 18.8337C181.207 19.5838 180.846 20.6801 180.846 22.1227V29.7393C180.846 29.9509 180.767 30.1336 180.611 30.2875C180.455 30.4414 180.269 30.5183 180.054 30.5183H178.969C178.754 30.5183 178.568 30.4414 178.412 30.2875C178.256 30.1336 178.177 29.9509 178.177 29.7393V10.8131C178.177 10.6015 178.256 10.4188 178.412 10.2649C178.568 10.1111 178.754 10.0341 178.969 10.0341H180.054C180.269 10.0341 180.455 10.1111 180.611 10.2649C180.767 10.4188 180.846 10.6015 180.846 10.8131V17.1892C181.276 16.6314 181.862 16.1698 182.605 15.8043C183.367 15.4196 184.296 15.2273 185.391 15.2273C186.622 15.2273 187.717 15.487 188.675 16.0063C189.633 16.5256 190.376 17.2757 190.903 18.2566C191.451 19.2183 191.724 20.3628 191.724 21.6899V29.7393Z"
      className="fill-fg-primary"
    />
    <path
      d="M202 15.2273C204.091 15.2273 205.743 15.8813 206.955 17.1892C208.167 18.4971 208.773 20.2762 208.773 22.5266V23.3056C208.773 23.5171 208.695 23.6999 208.539 23.8537C208.382 24.0076 208.197 24.0845 207.981 24.0845H197.894V24.2577C197.934 25.5271 198.325 26.5273 199.067 27.2582C199.83 27.9698 200.807 28.3256 202 28.3256C202.977 28.3256 203.73 28.2006 204.258 27.9506C204.805 27.7005 205.294 27.3447 205.724 26.8831C205.88 26.7292 206.017 26.6234 206.134 26.5657C206.271 26.508 206.447 26.4792 206.662 26.4792H207.542C207.776 26.4792 207.972 26.5561 208.128 26.71C208.284 26.8639 208.353 27.0466 208.333 27.2582C208.255 27.7775 207.962 28.316 207.454 28.8738C206.965 29.4124 206.251 29.874 205.313 30.2587C204.394 30.6241 203.29 30.8068 202 30.8068C200.749 30.8068 199.634 30.5279 198.657 29.9701C197.679 29.3931 196.898 28.6045 196.311 27.6044C195.744 26.6042 195.402 25.479 195.285 24.2288C195.246 23.6518 195.226 23.2094 195.226 22.9017C195.226 22.5939 195.246 22.1515 195.285 21.5745C195.402 20.382 195.744 19.3049 196.311 18.3432C196.898 17.3815 197.67 16.6218 198.628 16.064C199.605 15.5062 200.729 15.2273 202 15.2273ZM206.134 21.6611V21.5745C206.134 20.4012 205.753 19.4684 204.991 18.776C204.248 18.0643 203.251 17.7085 202 17.7085C200.866 17.7085 199.898 18.0643 199.097 18.776C198.315 19.4876 197.914 20.4205 197.894 21.5745V21.6611H206.134Z"
      className="fill-fg-primary"
    />
    <path
      d="M214.979 17.1892C215.448 16.5929 215.976 16.1217 216.562 15.7755C217.149 15.41 217.931 15.2273 218.908 15.2273C221.195 15.2273 222.798 16.064 223.717 17.7373C224.284 16.9295 224.929 16.314 225.652 15.8909C226.376 15.4485 227.324 15.2273 228.497 15.2273C230.413 15.2273 231.83 15.7947 232.749 16.9295C233.687 18.0643 234.156 19.6703 234.156 21.7476V29.7393C234.156 29.9509 234.078 30.1336 233.921 30.2875C233.765 30.4414 233.579 30.5183 233.364 30.5183H232.279C232.064 30.5183 231.879 30.4414 231.722 30.2875C231.566 30.1336 231.488 29.9509 231.488 29.7393V22.0361C231.488 19.151 230.334 17.7085 228.028 17.7085C226.972 17.7085 226.131 18.0547 225.506 18.7471C224.88 19.4395 224.568 20.4686 224.568 21.8342V29.7393C224.568 29.9509 224.489 30.1336 224.333 30.2875C224.177 30.4414 223.991 30.5183 223.776 30.5183H222.691C222.476 30.5183 222.29 30.4414 222.134 30.2875C221.977 30.1336 221.899 29.9509 221.899 29.7393V22.0361C221.899 19.151 220.746 17.7085 218.439 17.7085C217.383 17.7085 216.543 18.0547 215.917 18.7471C215.292 19.4395 214.979 20.4686 214.979 21.8342V29.7393C214.979 29.9509 214.901 30.1336 214.744 30.2875C214.588 30.4414 214.402 30.5183 214.187 30.5183H213.102C212.887 30.5183 212.702 30.4414 212.545 30.2875C212.389 30.1336 212.311 29.9509 212.311 29.7393V16.2948C212.311 16.0832 212.389 15.9005 212.545 15.7466C212.702 15.5927 212.887 15.5158 213.102 15.5158H214.187C214.402 15.5158 214.588 15.5927 214.744 15.7466C214.901 15.9005 214.979 16.0832 214.979 16.2948V17.1892Z"
      className="fill-fg-primary"
    />
    <path
      d="M242.368 35.3076C242.193 35.7692 241.909 36 241.518 36H240.316C240.12 36 239.954 35.9327 239.817 35.798C239.681 35.6634 239.612 35.4999 239.612 35.3076C239.612 35.2306 239.622 35.1633 239.641 35.1056L242.456 29.0758L236.651 16.4102C236.631 16.3525 236.621 16.2852 236.621 16.2082C236.621 16.0159 236.69 15.8524 236.826 15.7178C236.963 15.5831 237.129 15.5158 237.325 15.5158H238.527C238.918 15.5158 239.202 15.7466 239.378 16.2082L243.893 26.0176L248.468 16.2082C248.643 15.7466 248.927 15.5158 249.318 15.5158H250.52C250.716 15.5158 250.882 15.5831 251.019 15.7178C251.155 15.8524 251.224 16.0159 251.224 16.2082C251.224 16.2852 251.214 16.3525 251.195 16.4102L242.368 35.3076Z"
      className="fill-fg-primary"
    />
    <path
      d="M126.661 20.9741L116.815 4.27334C116.767 4.19088 116.698 4.12218 116.615 4.0742C116.531 4.02621 116.436 4.00062 116.34 4.00001C116.243 3.99941 116.148 4.0238 116.064 4.07075C115.98 4.11769 115.91 4.18551 115.861 4.26737L112.912 9.27163C112.816 9.43544 112.765 9.62126 112.765 9.81041C112.765 9.99957 112.816 10.1854 112.912 10.3492L119.332 21.2442C119.429 21.4082 119.568 21.5443 119.736 21.6389C119.903 21.7335 120.093 21.7832 120.286 21.783H126.184C126.281 21.7827 126.375 21.7577 126.459 21.7103C126.542 21.6629 126.612 21.5948 126.66 21.5129C126.708 21.4311 126.734 21.3382 126.734 21.2436C126.734 21.1491 126.709 21.0561 126.661 20.9741Z"
      fill={logoColor}
    />
    <path
      d="M100.852 29.7025L110.698 13.0018C110.746 12.92 110.816 12.852 110.899 12.8048C110.983 12.7576 111.078 12.7327 111.174 12.7327C111.271 12.7327 111.366 12.7576 111.449 12.8048C111.533 12.852 111.602 12.92 111.65 13.0018L114.601 18.0016C114.697 18.1657 114.748 18.3517 114.748 18.5411C114.748 18.7305 114.697 18.9165 114.601 19.0806L108.181 29.9757C108.084 30.1396 107.945 30.2758 107.778 30.3704C107.611 30.465 107.421 30.5147 107.228 30.5145H101.329C101.232 30.5149 101.136 30.4902 101.052 30.4428C100.968 30.3953 100.898 30.3269 100.849 30.2444C100.801 30.1619 100.776 30.0683 100.776 29.9731C100.777 29.8779 100.803 29.7846 100.852 29.7025Z"
      fill={logoColor}
    />
    <path
      d="M111.649 30.5109H131.341C131.438 30.5108 131.533 30.4858 131.616 30.4384C131.7 30.391 131.769 30.3229 131.817 30.2409C131.865 30.1589 131.891 30.0659 131.891 29.9713C131.891 29.8767 131.865 29.7838 131.816 29.702L128.871 24.6992C128.774 24.5352 128.635 24.3991 128.468 24.3045C128.3 24.2099 128.11 24.1602 127.917 24.1604H115.076C114.883 24.1602 114.693 24.2099 114.526 24.3045C114.358 24.3991 114.219 24.5352 114.122 24.6992L111.174 29.702C111.125 29.7838 111.1 29.8767 111.099 29.9713C111.099 30.0659 111.125 30.1589 111.173 30.2409C111.221 30.3229 111.29 30.391 111.374 30.4384C111.458 30.4858 111.552 30.5108 111.649 30.5109Z"
      fill={logoColor}
    />
  </svg>
);
