import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { Tag } from '../'

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`

interface TagListProps {
  tags: string[]
}

export const TagList: React.SFC<TagListProps> = ({ tags }) => (
  <List>
    {tags.map(tag => (
      <li key={tag}>
        <Tag to={`/tags/${_.kebabCase(tag)}`}>{tag}</Tag>
      </li>
    ))}
  </List>
)

export default TagList
