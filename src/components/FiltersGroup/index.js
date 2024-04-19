import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    enterSearchInput,
    changeCategory,
    changeRating,
    changeSearchInput,
    searchInput,
    activeCategoryId,
    activeRatingId,
    clearFilters,
  } = props

  const onRenderingRating = () => {
    return ratingsList.map(eachItem => {
      const z = () => changeRating(eachItem.ratingId)
      const o =
        activeRatingId === eachItem.ratingId ? 'and-up active-rating' : 'and-up'
      return (
        <li className="rating-item" key={eachItem.ratingId} onClick={z}>
          <img
            src={eachItem.imageUrl}
            key={eachItem.ratingId}
            alt={`rating ${eachItem.ratingId}`}
          />
          <p className={o}>& up</p>
        </li>
      )
    })
  }

  const onRenderingRatingsFinal = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{onRenderingRating()}</ul>
    </div>
  )
  const onRenderingCategories = () => {
    return categoryOptions.map(eachItem => {
      const z = () => changeCategory(eachItem.categoryId)
      const y =
        activeCategoryId === eachItem.categoryId
          ? 'category-name active-category-name'
          : 'category-name'
      return (
        <li className="category-item" key={eachItem.categoryId} onClick={z}>
          <p className={y}>{eachItem.name}</p>
        </li>
      )
    })
  }
  const onRenderCategoriesFinal = () => (
    <div>
      <h1>Category</h1>
      <ul>{onRenderingCategories()}</ul>
    </div>
  )
  const enterSearch = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearch = event => changeSearchInput(event.target.value)
  const onRenderingSearch = () => {
    return (
      <div>
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearch}
          onKeyDown={enterSearch}
          placeholder="Search"
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {onRenderingSearch()}
      {onRenderCategoriesFinal()}
      {onRenderingRatingsFinal()}
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  )
}

export default FiltersGroup

/*
import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
*/
