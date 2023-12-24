import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
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

  onHouseSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage message={'House page destroyed, try later'} />
    }

    const itemList = (
      <ItemList 
        getData={this.service.getAllHouses}
        renderItem={({name}) => name}
        onSelected={this.onHouseSelected}/>
    )

    const charDetails = (
      <ItemDetails 
        getData={this.service.getHouse}
        itemId={this.state.selectedItem}>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          <Field field='overlord' label='Overlord'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}