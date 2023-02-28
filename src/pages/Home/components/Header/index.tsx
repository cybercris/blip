import { Button } from '../../../../components/Button'
import { IconButton } from '../../../../components/IconButton'

import BlocksImg from '../../../../assets/blocks.svg'
import ListImg from '../../../../assets/list.svg'

import { HeaderContainer } from './styles'

interface HeaderProps {
  searchQuery?: string
  handleSearchQueryChange: (searchQuery: string) => void
  handleOrderByChange: (orderBy: 'name' | 'creation') => void
  handleToggleBlocksView: () => void
  handleToggleListView: () => void
  isBlocksView: boolean
}

export function Header({
  searchQuery,
  handleSearchQueryChange,
  handleOrderByChange,
  handleToggleBlocksView,
  handleToggleListView,
  isBlocksView,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => handleSearchQueryChange(event.target.value)}
        placeholder="Search"
      />
      <Button onClick={() => handleOrderByChange('name')}>Order by name</Button>
      <Button onClick={() => handleOrderByChange('creation')}>
        Order by creation
      </Button>
      <IconButton
        onClick={handleToggleBlocksView}
        opacity={isBlocksView ? 1 : 0.3}
      >
        <img src={BlocksImg} alt="See bots as blocks" />
      </IconButton>
      <IconButton
        onClick={handleToggleListView}
        opacity={!isBlocksView ? 1 : 0.3}
      >
        <img src={ListImg} alt="See bots as list" />
      </IconButton>
    </HeaderContainer>
  )
}
