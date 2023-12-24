import React, { Component } from "react";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import GetResource from "../../services/getResource";
import RowBlock from "../RowBlock/rowBlock";

export default class HousePage extends Component {

  service = new GetResource();

  state = {
    selectedItem: null,
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  onHouseSelected = (selectedChar) => {
    this.setState({selectedChar});
  }

  

  render() {
    if (this.state.error) {
      return <ErrorMessage message={'Character page destroyed, try later'} />
    }

    const itemList = (
      <ItemList 
        getData={this.service.getAllHouses}
        renderItem={({name}) => name}
        onSelected={this.onHouseSelected}/>
    )

    const charDetails = (
      <CharDetails charId={this.state.selectedItem}/>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}