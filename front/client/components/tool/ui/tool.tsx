// Import global npm modules
import { FC, useState } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  text: string;
}

const Tool: FC<Props> = ({ text }) => {

  const [
    tool,
    setTool
  ] = useState<boolean>(false)

  return <Main

  >
    <IconTip
      onMouseEnter={() => setTool(true)}
      onMouseLeave={() => setTool(false)}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_525_245)">
          <path d="M9.04297 0.0429249C6.71094 0.281206 4.58594 1.28511 2.9375 2.92964C-0.976562 6.83589 -0.976562 13.164 2.9375 17.0703C4.52344 18.6523 6.45703 19.6015 8.76953 19.9296C9.23437 19.9961 10.7695 19.9921 11.25 19.9257C13.5156 19.6132 15.5039 18.6367 17.0664 17.0664C18.8789 15.2421 19.8906 12.9218 19.9883 10.3515C20.0898 7.57418 19.043 4.91011 17.0625 2.92964C15.5273 1.39058 13.582 0.417925 11.3867 0.0937061C10.9102 0.0233936 9.52344 -0.00785637 9.04297 0.0429249ZM10.5664 5.04293C12.3984 5.35152 13.1992 6.89449 12.3008 8.38277C12.0781 8.74996 11.7773 9.08199 11.3047 9.47652C11.043 9.69527 10.8008 9.93746 10.7227 10.0546C10.5547 10.3046 10.4687 10.6328 10.4687 11.0156C10.4687 11.5546 10.2773 11.7343 9.71094 11.7343C9.31641 11.7343 9.16406 11.664 9.05859 11.4336C8.95703 11.2031 8.95703 10.5156 9.05859 10.1093C9.21094 9.51168 9.44922 9.18746 10.1367 8.63277C10.8086 8.0898 10.9727 7.86714 11.0078 7.43746C11.0547 6.82027 10.5469 6.44527 9.71875 6.49214C9.19141 6.51949 8.94922 6.66011 8.61328 7.13277C8.32812 7.5273 8.01562 7.59761 7.62109 7.35152C7.12109 7.04293 7.19531 6.30464 7.78516 5.72652C8.40625 5.11714 9.46094 4.85543 10.5664 5.04293ZM10.1328 12.7539C10.4766 12.9179 10.6992 13.2656 10.7031 13.6289C10.7031 13.9531 10.6289 14.1367 10.4102 14.3632C10.0039 14.7812 9.39453 14.7851 8.99609 14.3671C8.48828 13.8359 8.69531 12.9609 9.39453 12.7031C9.5625 12.6406 9.95312 12.6679 10.1328 12.7539Z" fill="#323232" fill-opacity="0.3" />
        </g>
        <defs>
          <clipPath id="clip0_525_245">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconTip>

    <TipText tool={tool}>{text}</TipText>
  </Main>

}

// Create Main styled component
const Main = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`

const IconTip = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const TipText = styled.p<any>`
  opacity: ${({ tool }) => tool ? '1' : '0'};
  pointer-events: none;
  padding: 3px 6px;
  background-color: #FFFCF9;
  border-radius: 5px;
  position: absolute;
  top: ${({ tool }) => tool ? '-30px' : '0'};
  transition: 0.2s;
  max-width: 200px;
  z-index: 0;
`

export default Tool