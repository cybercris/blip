import styled from 'styled-components'

interface ImageProps {
  src: String
  alt: String
  float?: boolean
}

export const StarImage = styled.img<ImageProps>`
  height: 1.5rem;
  margin-right: 20px;

  ${(props) =>
    props.float &&
    `
      position: absolute;
      top: 12px;
      left: 12px;
    `}
`
