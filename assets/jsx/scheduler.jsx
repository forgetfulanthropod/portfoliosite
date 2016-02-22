const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = 
["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ICONS = ["glyphicon-remove-sign", "glyphicon-question-sign", "glyphicon-ok-sign", "glyphicon-hourglass"];



let MonthsRow = React.createClass({
  render() {
    let monthsHtml = [<th key="0"></th>];

    let key = 1;
    for (let month of this.props.months) {
      monthsHtml.push( <th key={key} colSpan={month[1]} className="month open-bottom">{month[0]}</th> );
      key += 1;                    
    }
    
    return <tr>
      {monthsHtml}
    </tr>;
  }
});

let DaysRow = React.createClass({
  render: function() {
    let daysHtml = [<th key="0"></th>];
    let key = 1;
    for ( let day of this.props.days ) {
      daysHtml.push(<th key={key} className="open-top">{day}</th>);
      key += 1;                    
    }
    return <tr>
      {daysHtml}                    
    </tr>;
  } 
});

let TimesRow = React.createClass({
  render: function() {
    let timesHtml = [<th key="0"></th>];
    let key = 1;
    for ( let day of this.props.times ) {
      timesHtml.push(<th key={key} className="open-top">{day}</th>);
      key += 1;
    }
    return <tr>
      {timesHtml}                    
    </tr>;
  } 
});

let DatesSection = React.createClass({
  readyMonthsAndDays: function() {
    this.months = [];
    this.days = [];
    this.times = [];
    
    for (let dateString of this.props.dates) {
      let date = new Date(dateString);
      let m = date.getMonth();
      let month = MONTHS[m];
      //months are stored as 2d array like[[month,colspan]...]
      if(this.months.length == 0 || month != this.months[this.months.length-1][0])
        this.months.push([month, 1]);
      else {
        this.months[this.months.length-1][1] += 1;
      }
      this.days.push(DAYS[date.getDay()]+" "+date.getDate());
      console.log(moment(dateString).format('HH:MM'));
      this.times.push(moment(dateString).format('HH:MM'));
    }
  },
  render: function() {
    this.readyMonthsAndDays();    
    return <thead>
      <MonthsRow months={this.months}/> 
      <DaysRow days={this.days}/> 
      <TimesRow times={this.times}/> 
    </thead>;
  }
});

let VotesRow = React.createClass({
  render: function() {
    let key = 0;
    let votesHtml = [<th key={key} className="voter-name">{this.props.name}</th>];
    for (let vote of this.props.votes) {
      votesHtml.push(<td key={key+=1} className={"vote-"+vote}>{vote}</td>);
    }
    return <tr>
      {votesHtml}
      <td><div onClick={this.props.onEdit} className="glyphicon glyphicon-pencil btn edit-votes-btn"></div></td>
      <td><div onClick={this.props.onDelete} className="glyphicon glyphicon-trash btn delete-votes-btn"></div></td>
    </tr>;
  }
});

let NewVotesRow = React.createClass({
  getInitialState: function() {
    return {
      personName: '',
      votes: this.initializeArrayOfValue(3),
      canBeInitialized: true,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (
      nextProps.preExistingPerson == undefined
      || this.state.canBeInitialized == false
    ) return;
    
    this.setStateToPreExistingPerson(nextProps.preExistingPerson);
    this.state.canBeInitialized = false;
    this.setState(this.state);
  },

  initializeArrayOfValue: function(val) {
    return Array.apply(null, Array(+this.props.numCols)).map(Number.prototype.valueOf,val);
  },

  handlePersonNameChange: function(e) {
    this.state.personName = e.target.value;
    this.setState(this.state);    
    this.props.updateParent(this.state);
  },

  handleVoteChange: function(e) {
    let voteIndex = +e.target.name.split('-')[1];
    let voteValue = this.state.votes[voteIndex];
    let nextVoteValue = voteValue > 0 ? voteValue-1 : 3;
    
    this.state.votes[voteIndex] = nextVoteValue;
    this.setState(this.state); 
    this.props.updateParent(this.state);
  },

  setStateToPreExistingPerson: function(preExistingPerson) {
    this.state.personName = preExistingPerson.personName;    
    this.state.votes = preExistingPerson.votes.map(function (vote) { return vote; });    
    
    this.setState(this.state);
    // this.props.updateParent(this.state);
    
  },
  
  getPersonForFirebaseNameFromState: function() {
    return this.state.personName;
  },

  render: function() {
    var personName = this.state.personName;    
    let Html = [
      <td key="0">
        <input 
          name="personName" 
          onChange={this.handlePersonNameChange} 
          placeholder="Your Name" 
          value={personName}
        />
      </td>
    ];
    for (var i = 0; i < this.props.numCols; i++) {
      let name = "vote-"+i;
      let voteValue = this.state.votes[i];
      let statusClass = "pick-"+voteValue;
      let iconClasses = "glyphicon "+ICONS[voteValue];
      let classes = statusClass + " " + iconClasses;
      Html.push(
        <td key={i+1}>
          <button className={classes} name={name} data-index={i} value={this.state.votes[i]} onClick={this.handleVoteChange}></button>
        </td>);
    } 
    return <tr>
      {Html}      
    </tr>;
  }
});
                     
let TotalsRow = React.createClass({
  render: function() {
     let totalsHtml = this.getTotalsHtml();
     return <tr>
       {totalsHtml}
     </tr>;
  },
  
  getTotalsHtml: function() {
     let totalsHtml = [<th key="0" className="open-right">TOTAL</th>];
     this.readyTotals();        
     let key = 1;
     for (let total of this.totals) {
       totalsHtml.push(<th key={key} className="bottom-line">{total}</th>);
       key+=1;
     }
     return totalsHtml;
  },
                       
  readyTotals: function() {
    this.totals = Array.apply(null, Array(this.props.numCols)).map(Number.prototype.valueOf,0);;
    let people = this.props.people;
    for (let name in people) {
      for (var i = 0; i < people[name]['votes'].length; i++) {
        this.totals[i] += people[name]['votes'][i] < 3 ? people[name]['votes'][i] / 2 : 0;
      }
    }
  }
});
                     
let VotesSection = React.createClass({
  getInitialState: function() {
    return {
      preExistingPerson: null
    };
  },
  onDelete: function(name) {
    if (!confirm ("Are you sure you want to delte " + name + "from the results?"))
      return;    
    this.props.deletePersonFromDatabase(name);
  },
  onEdit: function(name) {
    var person = this.props.people[name];
    this.state.preExistingPerson = {
      personName: name,
      votes: person.votes
    };
    this.setState(this.state);
    // this.props.deletePersonFromDatabase(name);
  },
  
  render: function() {
    let Html = [];
    let key = 0;
    let peopleHaveVoted = !Object.is(this.props.people,{});
    
    if(peopleHaveVoted) {
      for (var name in this.props.people) {
        Html.push(
          <VotesRow 
            onDelete={this.onDelete.bind(this, name)} 
            onEdit={this.onEdit.bind(this, name)} 
            key={key+=1} 
            name={name} 
            votes={this.props.people[name].votes}
          />
        );
      } 
      Html.push(
        <NewVotesRow 
          updateParent={this.props.updateParent} 
          key={key+=1} 
          numCols={this.props.numCols} 
          preExistingPerson={this.state.preExistingPerson}
        />
      );
      Html.push(<TotalsRow key={key+=1} people={this.props.people} numCols={this.props.numCols}/>);               
    }
    
    return <tbody>
      {Html}
    </tbody>
  },
});

let DatePicker = React.createClass({
  getInitialState: function() {
    return {
      dates: [],
      people: [],
      type: '',
      newPerson: {
        name: '',
        votes: []
      }
    };
  },
  
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://disputed.firebaseio.com/data-charlie-2016-02-13T00:18:31-05:00/");
    this.firebaseRef.on('value', function(dataSnapshot) {
      this.setState({
        dates: dataSnapshot.val().dates,
        people: dataSnapshot.val().people,
        type: dataSnapshot.val().type
      });
    }.bind(this));
  },
  
  handleSubmit: function() {
    if ( ! this.votesAreValid())
      this.handleInvalidVotes();
    
    this.addPersonToDatabase();
  },
  
  getPersonForFirebase: function() {
    let data = {};
    data['votes'] = this.getVotes();
    let person = {};    
    person[this.state.newPerson.personName] = data;
    return person;
  },
  
  getVotes: function() {
    return this.state.newPerson.votes;
  },
  
  votesAreValid: function() {
    let votes = this.getVotes();
    
    if (votes.length > 1)
      return true;
  },
  
  addPersonToDatabase: function() {
    let person = this.getPersonForFirebase();
    let people = this.firebaseRef.child("people");
    people.update(person);
  },
  
  updatePersonInState: function(person) {
    this.state.newPerson = person;
    this.setState(this.state);
  },
  
  deletePersonFromDatabase: function(name) {
    let people = this.firebaseRef.child("people");
    let person = people.child(name);
    person.remove();
  },
  
  render: function() {
    return <div>
      <div className="table-container center-children">
        <table>
          <DatesSection dates={this.state.dates} />
          <VotesSection 
            deletePersonFromDatabase={this.deletePersonFromDatabase}
            updateParent={this.updatePersonInState} 
            people={this.state.people} 
            numCols={this.state.dates.length}
          />
        </table>
      </div>
      <div className="center-children">
        <button className="button submit-button" onClick={this.handleSubmit}>Submit Availability</button>
      </div>        
    </div>;
  }
});

React.render(<DatePicker />, document.getElementById('datePicker'));