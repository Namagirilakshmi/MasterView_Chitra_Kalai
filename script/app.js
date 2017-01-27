var data = [
 {"Bruhathkayosaurus":{"appeared":-70000000,"height":25,"length":44,"order":"saurischia","vanished":-70000000,"weight":135000,"url":"css/images/spices_1.jpg"},"Lambeosaurus":{"appeared":-76000000,"height":2.1,"length":12.5,"order":"Ornithischia","vanished":-75000000,"weight":5000,"url":"css/images/spices_2.jpg"},"Linhenykus":{"appeared":-85000000,"height":0.6,"length":1,"order":"theropoda","vanished":-75000000,"weight":3,"url":"css/images/spices_3.png"},"Pterodactyl":{"appeared":-150000000,"height":0.6,"length":0.8,"order":"pterosauria","vanished":-148500000,"weight":2,"url":"css/images/spices_4.jpg"},"Stegosaurus":{"appeared":-155000000,"height":4,"length":9,"order":"ornithischia","vanished":-150000000,"weight":2500,"url":"css/images/spices_5.jpg"},"Triceratops":{"appeared":-68000000,"height":3,"length":8,"order":"ornithischia","vanished":-66000000,"weight":11000,"url":"css/images/spices_6.png"}}
 ];
var title=Object.keys(data[0]);
var content=Object.values(data[0]);
var Tabs = React.createClass({
  getInitialState: function() {
   return {activeTab: window.screen.availWidth > 300 && window.screen.availWidth < 768 ? '' :0 };  
  },
  handleClick: function(index) {
  this.setState({activeTab: index});
    return false;
  },
  Back:function(){
    window.location.href="index.html";
  },
  render: function() {
    return (
      <div className="wrapper">
          <div className="headContent">
           <h1>The Dino Kingdom !!!</h1>
          </div>  
          <div className="mainContent">
            <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 LeftContent">
              {this.props.data.map(function (tab, index) {
              var activeClass = this.state.activeTab === index ? 'active' : '';
              return (
              <div onClick={this.handleClick.bind(this, index)} className="navList">
                <div className={'tab ' + activeClass} >
                  <p>{tab}<span className="Arrow" > &#8250;</span></p>
                </div>
              </div>
              )}, this)}
            </div>
            <div className="tabs-content col-lg-8 col-md-8 col-sm-9">
              {this.props.data.map(function (tab, index) {
              var activeClass = this.state.activeTab === index ? 'active' : '';
              return (
              <div className={'content ' + activeClass} id="subContent">
                  <span>{tab}</span>
                  <img className="spicesImg surprise" src={content[index].url}/>
                <div className="Info surprise">
                  <p>appeared: {content[index].appeared}</p>
                  <p>height: {content[index].height}</p>
                  <p>length: {content[index].length}</p>
                  <p>order: {content[index].order}</p>
                  <p>vanished: {content[index].vanished}</p>
                  <p>weight: {content[index].weight}</p>
                  <a href="#"> <button className="okay" onClick={this.Back}>Back</button></a>
                </div>
              </div>
               )}, this)}
            </div>
              <div className="clearFix"></div>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <Tabs data={title} />,
  document.getElementById('content')
);

