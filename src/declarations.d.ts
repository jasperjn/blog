declare const graphql: (query: TemplateStringsArray) => void

declare module '*.jpg'

declare module 'disqus-react' {
  export class DiscussionEmbed extends React.Component<
    {
      shortname: string
    },
    {}
  > {}
}

declare module '@material/react-button' {
  interface ButtonProps {
    raised?: boolean
    unelevated?: boolean
    outlined?: boolean
    disabled?: boolean
    unbounded?: boolean
    initRipple?: Function
    className?: string
    icon?: React.ReactNode
    children?: string
  }
  export default class Button extends React.Component<ButtonProps> {}
}

declare module '@material/react-material-icon' {
  interface IconProps {
    icon?: string
    hasRipple?: boolean
  }

  export default class Icon extends React.Component<IconProps> {}
}
