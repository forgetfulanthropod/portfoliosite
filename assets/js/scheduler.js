(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var ICONS = ["glyphicon-remove-sign", "glyphicon-question-sign", "glyphicon-ok-sign", "glyphicon-hourglass"];

var MonthsRow = React.createClass({
  displayName: 'MonthsRow',
  render: function render() {
    var monthsHtml = [React.createElement('th', { key: '0' })];

    var key = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.props.months[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var month = _step.value;

        monthsHtml.push(React.createElement(
          'th',
          { key: key, colSpan: month[1], className: 'month open-bottom' },
          month[0]
        ));
        key += 1;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return React.createElement(
      'tr',
      null,
      monthsHtml
    );
  }
});

var DaysRow = React.createClass({
  displayName: 'DaysRow',

  render: function render() {
    var daysHtml = [React.createElement('th', { key: '0' })];
    var key = 1;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.props.days[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var day = _step2.value;

        daysHtml.push(React.createElement(
          'th',
          { key: key, className: 'open-top' },
          day
        ));
        key += 1;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return React.createElement(
      'tr',
      null,
      daysHtml
    );
  }
});

var TimesRow = React.createClass({
  displayName: 'TimesRow',

  render: function render() {
    var timesHtml = [React.createElement('th', { key: '0' })];
    var key = 1;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this.props.times[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var day = _step3.value;

        timesHtml.push(React.createElement(
          'th',
          { key: key, className: 'open-top' },
          day
        ));
        key += 1;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return React.createElement(
      'tr',
      null,
      timesHtml
    );
  }
});

var DatesSection = React.createClass({
  displayName: 'DatesSection',

  readyMonthsAndDays: function readyMonthsAndDays() {
    this.months = [];
    this.days = [];
    this.times = [];

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = this.props.dates[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var dateString = _step4.value;

        var date = new Date(dateString);
        var m = date.getMonth();
        var month = MONTHS[m];
        //months are stored as 2d array like[[month,colspan]...]
        if (this.months.length == 0 || month != this.months[this.months.length - 1][0]) this.months.push([month, 1]);else {
          this.months[this.months.length - 1][1] += 1;
        }
        this.days.push(DAYS[date.getDay()] + " " + date.getDate());
        console.log(moment(dateString).format('HH:MM'));
        this.times.push(moment(dateString).format('HH:MM'));
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  },
  render: function render() {
    this.readyMonthsAndDays();
    return React.createElement(
      'thead',
      null,
      React.createElement(MonthsRow, { months: this.months }),
      React.createElement(DaysRow, { days: this.days }),
      React.createElement(TimesRow, { times: this.times })
    );
  }
});

var VotesRow = React.createClass({
  displayName: 'VotesRow',

  render: function render() {
    var key = 0;
    var votesHtml = [React.createElement(
      'th',
      { key: key, className: 'voter-name' },
      this.props.name
    )];
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = this.props.votes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var vote = _step5.value;

        votesHtml.push(React.createElement(
          'td',
          { key: key += 1, className: "vote-" + vote },
          vote
        ));
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return React.createElement(
      'tr',
      null,
      votesHtml,
      React.createElement(
        'td',
        null,
        React.createElement('div', { onClick: this.props.onEdit, className: 'glyphicon glyphicon-pencil btn edit-votes-btn' })
      ),
      React.createElement(
        'td',
        null,
        React.createElement('div', { onClick: this.props.onDelete, className: 'glyphicon glyphicon-trash btn delete-votes-btn' })
      )
    );
  }
});

var NewVotesRow = React.createClass({
  displayName: 'NewVotesRow',

  getInitialState: function getInitialState() {
    return {
      personName: '',
      votes: this.initializeArrayOfValue(3),
      canBeInitialized: true
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.preExistingPerson == undefined || this.state.canBeInitialized == false) return;

    this.setStateToPreExistingPerson(nextProps.preExistingPerson);
    this.state.canBeInitialized = false;
    this.setState(this.state);
  },

  initializeArrayOfValue: function initializeArrayOfValue(val) {
    return Array.apply(null, Array(+this.props.numCols)).map(Number.prototype.valueOf, val);
  },

  handlePersonNameChange: function handlePersonNameChange(e) {
    this.state.personName = e.target.value;
    this.setState(this.state);
    this.props.updateParent(this.state);
  },

  handleVoteChange: function handleVoteChange(e) {
    var voteIndex = +e.target.name.split('-')[1];
    var voteValue = this.state.votes[voteIndex];
    var nextVoteValue = voteValue > 0 ? voteValue - 1 : 3;

    this.state.votes[voteIndex] = nextVoteValue;
    this.setState(this.state);
    this.props.updateParent(this.state);
  },

  setStateToPreExistingPerson: function setStateToPreExistingPerson(preExistingPerson) {
    this.state.personName = preExistingPerson.personName;
    this.state.votes = preExistingPerson.votes.map(function (vote) {
      return vote;
    });

    this.setState(this.state);
    // this.props.updateParent(this.state);
  },

  getPersonForFirebaseNameFromState: function getPersonForFirebaseNameFromState() {
    return this.state.personName;
  },

  render: function render() {
    var personName = this.state.personName;
    var Html = [React.createElement(
      'td',
      { key: '0' },
      React.createElement('input', {
        name: 'personName',
        onChange: this.handlePersonNameChange,
        placeholder: 'Your Name',
        value: personName
      })
    )];
    for (var i = 0; i < this.props.numCols; i++) {
      var name = "vote-" + i;
      var voteValue = this.state.votes[i];
      var statusClass = "pick-" + voteValue;
      var iconClasses = "glyphicon " + ICONS[voteValue];
      var classes = statusClass + " " + iconClasses;
      Html.push(React.createElement(
        'td',
        { key: i + 1 },
        React.createElement('button', { className: classes, name: name, 'data-index': i, value: this.state.votes[i], onClick: this.handleVoteChange })
      ));
    }
    return React.createElement(
      'tr',
      null,
      Html
    );
  }
});

var TotalsRow = React.createClass({
  displayName: 'TotalsRow',

  render: function render() {
    var totalsHtml = this.getTotalsHtml();
    return React.createElement(
      'tr',
      null,
      totalsHtml
    );
  },

  getTotalsHtml: function getTotalsHtml() {
    var totalsHtml = [React.createElement(
      'th',
      { key: '0', className: 'open-right' },
      'TOTAL'
    )];
    this.readyTotals();
    var key = 1;
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = this.totals[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var total = _step6.value;

        totalsHtml.push(React.createElement(
          'th',
          { key: key, className: 'bottom-line' },
          total
        ));
        key += 1;
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    return totalsHtml;
  },

  readyTotals: function readyTotals() {
    this.totals = Array.apply(null, Array(this.props.numCols)).map(Number.prototype.valueOf, 0);;
    var people = this.props.people;
    for (var name in people) {
      for (var i = 0; i < people[name]['votes'].length; i++) {
        this.totals[i] += people[name]['votes'][i] < 3 ? people[name]['votes'][i] / 2 : 0;
      }
    }
  }
});

var VotesSection = React.createClass({
  displayName: 'VotesSection',

  getInitialState: function getInitialState() {
    return {
      preExistingPerson: null
    };
  },
  onDelete: function onDelete(name) {
    if (!confirm("Are you sure you want to delte " + name + "from the results?")) return;
    this.props.deletePersonFromDatabase(name);
  },
  onEdit: function onEdit(name) {
    var person = this.props.people[name];
    this.state.preExistingPerson = {
      personName: name,
      votes: person.votes
    };
    this.setState(this.state);
    // this.props.deletePersonFromDatabase(name);
  },

  render: function render() {
    var Html = [];
    var key = 0;
    var peopleHaveVoted = !Object.is(this.props.people, {});

    if (peopleHaveVoted) {
      for (var name in this.props.people) {
        Html.push(React.createElement(VotesRow, {
          onDelete: this.onDelete.bind(this, name),
          onEdit: this.onEdit.bind(this, name),
          key: key += 1,
          name: name,
          votes: this.props.people[name].votes
        }));
      }
      Html.push(React.createElement(NewVotesRow, {
        updateParent: this.props.updateParent,
        key: key += 1,
        numCols: this.props.numCols,
        preExistingPerson: this.state.preExistingPerson
      }));
      Html.push(React.createElement(TotalsRow, { key: key += 1, people: this.props.people, numCols: this.props.numCols }));
    }

    return React.createElement(
      'tbody',
      null,
      Html
    );
  }
});

var DatePicker = React.createClass({
  displayName: 'DatePicker',

  getInitialState: function getInitialState() {
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

  componentWillMount: function componentWillMount() {
    this.firebaseRef = new Firebase("https://disputed.firebaseio.com/data-charlie-2016-02-13T00:18:31-05:00/");
    this.firebaseRef.on('value', function (dataSnapshot) {
      this.setState({
        dates: dataSnapshot.val().dates,
        people: dataSnapshot.val().people,
        type: dataSnapshot.val().type
      });
    }.bind(this));
  },

  handleSubmit: function handleSubmit() {
    if (!this.votesAreValid()) this.handleInvalidVotes();

    this.addPersonToDatabase();
  },

  getPersonForFirebase: function getPersonForFirebase() {
    var data = {};
    data['votes'] = this.getVotes();
    var person = {};
    person[this.state.newPerson.personName] = data;
    return person;
  },

  getVotes: function getVotes() {
    return this.state.newPerson.votes;
  },

  votesAreValid: function votesAreValid() {
    var votes = this.getVotes();

    if (votes.length > 1) return true;
  },

  addPersonToDatabase: function addPersonToDatabase() {
    var person = this.getPersonForFirebase();
    var people = this.firebaseRef.child("people");
    people.update(person);
  },

  updatePersonInState: function updatePersonInState(person) {
    this.state.newPerson = person;
    this.setState(this.state);
  },

  deletePersonFromDatabase: function deletePersonFromDatabase(name) {
    var people = this.firebaseRef.child("people");
    var person = people.child(name);
    person.remove();
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'table-container center-children' },
        React.createElement(
          'table',
          null,
          React.createElement(DatesSection, { dates: this.state.dates }),
          React.createElement(VotesSection, {
            deletePersonFromDatabase: this.deletePersonFromDatabase,
            updateParent: this.updatePersonInState,
            people: this.state.people,
            numCols: this.state.dates.length
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'center-children' },
        React.createElement(
          'button',
          { className: 'button submit-button', onClick: this.handleSubmit },
          'Submit Availability'
        )
      )
    );
  }
});

React.render(React.createElement(DatePicker, null), document.getElementById('datePicker'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanN4L3NjaGVkdWxlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxDQUFDLFNBQUQsRUFBVyxVQUFYLEVBQXNCLE9BQXRCLEVBQThCLE9BQTlCLEVBQXNDLEtBQXRDLEVBQTRDLE1BQTVDLEVBQW1ELE1BQW5ELEVBQTBELFFBQTFELEVBQW1FLFdBQW5FLEVBQStFLFNBQS9FLEVBQXlGLFVBQXpGLEVBQW9HLFVBQXBHLENBQVQ7QUFDTixJQUFNLE9BQ04sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FETTs7QUFHTixJQUFNLFFBQVEsQ0FBQyx1QkFBRCxFQUEwQix5QkFBMUIsRUFBcUQsbUJBQXJELEVBQTBFLHFCQUExRSxDQUFSOztBQUlOLElBQUksWUFBWSxNQUFNLFdBQU4sQ0FBa0I7O0FBQ2hDLDRCQUFTO0FBQ1AsUUFBSSxhQUFhLENBQUMsNEJBQUksS0FBSSxHQUFKLEVBQUosQ0FBRCxDQUFiLENBREc7O0FBR1AsUUFBSSxNQUFNLENBQU4sQ0FIRzs7Ozs7O0FBSVAsMkJBQWtCLEtBQUssS0FBTCxDQUFXLE1BQVgsMEJBQWxCLG9HQUFxQztZQUE1QixvQkFBNEI7O0FBQ25DLG1CQUFXLElBQVgsQ0FBaUI7O1lBQUksS0FBSyxHQUFMLEVBQVUsU0FBUyxNQUFNLENBQU4sQ0FBVCxFQUFtQixXQUFVLG1CQUFWLEVBQWpDO1VBQWdFLE1BQU0sQ0FBTixDQUFoRTtTQUFqQixFQURtQztBQUVuQyxlQUFPLENBQVAsQ0FGbUM7T0FBckM7Ozs7Ozs7Ozs7Ozs7O0tBSk87O0FBU1AsV0FBTzs7O01BQ0osVUFESTtLQUFQLENBVE87R0FEdUI7Q0FBbEIsQ0FBWjs7QUFnQkosSUFBSSxVQUFV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QURvQztBQUVwQyxTQUFLLFFBQUwsQ0FBYyxLQUFLLEtBQUwsQ0FBZCxDQUZvQztHQUFqQjs7QUFLckIsNEJBQTBCLGtDQUFTLElBQVQsRUFBZTtBQUN2QyxRQUFJLFNBQVMsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFFBQXZCLENBQVQsQ0FEbUM7QUFFdkMsUUFBSSxTQUFTLE9BQU8sS0FBUCxDQUFhLElBQWIsQ0FBVCxDQUZtQztBQUd2QyxXQUFPLE1BQVAsR0FIdUM7R0FBZjs7QUFNMUIsVUFBUSxrQkFBVztBQUNqQixXQUFPOzs7TUFDTDs7VUFBSyxXQUFVLGlDQUFWLEVBQUw7UUFDRTs7O1VBQ0Usb0JBQUMsWUFBRCxJQUFjLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFyQixDQURGO1VBRUUsb0JBQUMsWUFBRDtBQUNFLHNDQUEwQixLQUFLLHdCQUFMO0FBQzFCLDBCQUFjLEtBQUssbUJBQUw7QUFDZCxvQkFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYO0FBQ1IscUJBQVMsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQjtXQUpYLENBRkY7U0FERjtPQURLO01BWUw7O1VBQUssV0FBVSxpQkFBVixFQUFMO1FBQ0U7O1lBQVEsV0FBVSxzQkFBVixFQUFpQyxTQUFTLEtBQUssWUFBTCxFQUFsRDs7U0FERjtPQVpLO0tBQVAsQ0FEaUI7R0FBWDtDQXJFTyxDQUFiOztBQXlGSixNQUFNLE1BQU4sQ0FBYSxvQkFBQyxVQUFELE9BQWIsRUFBNkIsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQTdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IE1PTlRIUyA9IFsnSmFudWFyeScsJ0ZlYnJ1YXJ5JywnTWFyY2gnLCdBcHJpbCcsJ01heScsJ0p1bmUnLCdKdWx5JywnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsJ05vdmVtYmVyJywnRGVjZW1iZXInXTtcbmNvbnN0IERBWVMgPSBcbltcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcblxuY29uc3QgSUNPTlMgPSBbXCJnbHlwaGljb24tcmVtb3ZlLXNpZ25cIiwgXCJnbHlwaGljb24tcXVlc3Rpb24tc2lnblwiLCBcImdseXBoaWNvbi1vay1zaWduXCIsIFwiZ2x5cGhpY29uLWhvdXJnbGFzc1wiXTtcblxuXG5cbmxldCBNb250aHNSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbW9udGhzSHRtbCA9IFs8dGgga2V5PVwiMFwiPjwvdGg+XTtcblxuICAgIGxldCBrZXkgPSAxO1xuICAgIGZvciAobGV0IG1vbnRoIG9mIHRoaXMucHJvcHMubW9udGhzKSB7XG4gICAgICBtb250aHNIdG1sLnB1c2goIDx0aCBrZXk9e2tleX0gY29sU3Bhbj17bW9udGhbMV19IGNsYXNzTmFtZT1cIm1vbnRoIG9wZW4tYm90dG9tXCI+e21vbnRoWzBdfTwvdGg+ICk7XG4gICAgICBrZXkgKz0gMTsgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gPHRyPlxuICAgICAge21vbnRoc0h0bWx9XG4gICAgPC90cj47XG4gIH1cbn0pO1xuXG5sZXQgRGF5c1JvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGF5c0h0bWwgPSBbPHRoIGtleT1cIjBcIj48L3RoPl07XG4gICAgbGV0IGtleSA9IDE7XG4gICAgZm9yICggbGV0IGRheSBvZiB0aGlzLnByb3BzLmRheXMgKSB7XG4gICAgICBkYXlzSHRtbC5wdXNoKDx0aCBrZXk9e2tleX0gY2xhc3NOYW1lPVwib3Blbi10b3BcIj57ZGF5fTwvdGg+KTtcbiAgICAgIGtleSArPSAxOyAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiA8dHI+XG4gICAgICB7ZGF5c0h0bWx9ICAgICAgICAgICAgICAgICAgICBcbiAgICA8L3RyPjtcbiAgfSBcbn0pO1xuXG5sZXQgVGltZXNSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRpbWVzSHRtbCA9IFs8dGgga2V5PVwiMFwiPjwvdGg+XTtcbiAgICBsZXQga2V5ID0gMTtcbiAgICBmb3IgKCBsZXQgZGF5IG9mIHRoaXMucHJvcHMudGltZXMgKSB7XG4gICAgICB0aW1lc0h0bWwucHVzaCg8dGgga2V5PXtrZXl9IGNsYXNzTmFtZT1cIm9wZW4tdG9wXCI+e2RheX08L3RoPik7XG4gICAgICBrZXkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgIHt0aW1lc0h0bWx9ICAgICAgICAgICAgICAgICAgICBcbiAgICA8L3RyPjtcbiAgfSBcbn0pO1xuXG5sZXQgRGF0ZXNTZWN0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZWFkeU1vbnRoc0FuZERheXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubW9udGhzID0gW107XG4gICAgdGhpcy5kYXlzID0gW107XG4gICAgdGhpcy50aW1lcyA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IGRhdGVTdHJpbmcgb2YgdGhpcy5wcm9wcy5kYXRlcykge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGxldCBtID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgbGV0IG1vbnRoID0gTU9OVEhTW21dO1xuICAgICAgLy9tb250aHMgYXJlIHN0b3JlZCBhcyAyZCBhcnJheSBsaWtlW1ttb250aCxjb2xzcGFuXS4uLl1cbiAgICAgIGlmKHRoaXMubW9udGhzLmxlbmd0aCA9PSAwIHx8IG1vbnRoICE9IHRoaXMubW9udGhzW3RoaXMubW9udGhzLmxlbmd0aC0xXVswXSlcbiAgICAgICAgdGhpcy5tb250aHMucHVzaChbbW9udGgsIDFdKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRoc1t0aGlzLm1vbnRocy5sZW5ndGgtMV1bMV0gKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF5cy5wdXNoKERBWVNbZGF0ZS5nZXREYXkoKV0rXCIgXCIrZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgY29uc29sZS5sb2cobW9tZW50KGRhdGVTdHJpbmcpLmZvcm1hdCgnSEg6TU0nKSk7XG4gICAgICB0aGlzLnRpbWVzLnB1c2gobW9tZW50KGRhdGVTdHJpbmcpLmZvcm1hdCgnSEg6TU0nKSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVhZHlNb250aHNBbmREYXlzKCk7ICAgIFxuICAgIHJldHVybiA8dGhlYWQ+XG4gICAgICA8TW9udGhzUm93IG1vbnRocz17dGhpcy5tb250aHN9Lz4gXG4gICAgICA8RGF5c1JvdyBkYXlzPXt0aGlzLmRheXN9Lz4gXG4gICAgICA8VGltZXNSb3cgdGltZXM9e3RoaXMudGltZXN9Lz4gXG4gICAgPC90aGVhZD47XG4gIH1cbn0pO1xuXG5sZXQgVm90ZXNSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGtleSA9IDA7XG4gICAgbGV0IHZvdGVzSHRtbCA9IFs8dGgga2V5PXtrZXl9IGNsYXNzTmFtZT1cInZvdGVyLW5hbWVcIj57dGhpcy5wcm9wcy5uYW1lfTwvdGg+XTtcbiAgICBmb3IgKGxldCB2b3RlIG9mIHRoaXMucHJvcHMudm90ZXMpIHtcbiAgICAgIHZvdGVzSHRtbC5wdXNoKDx0ZCBrZXk9e2tleSs9MX0gY2xhc3NOYW1lPXtcInZvdGUtXCIrdm90ZX0+e3ZvdGV9PC90ZD4pO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAge3ZvdGVzSHRtbH1cbiAgICAgIDx0ZD48ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMub25FZGl0fSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbCBidG4gZWRpdC12b3Rlcy1idG5cIj48L2Rpdj48L3RkPlxuICAgICAgPHRkPjxkaXYgb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZX0gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCBidG4gZGVsZXRlLXZvdGVzLWJ0blwiPjwvZGl2PjwvdGQ+XG4gICAgPC90cj47XG4gIH1cbn0pO1xuXG5sZXQgTmV3Vm90ZXNSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcnNvbk5hbWU6ICcnLFxuICAgICAgdm90ZXM6IHRoaXMuaW5pdGlhbGl6ZUFycmF5T2ZWYWx1ZSgzKSxcbiAgICAgIGNhbkJlSW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICBuZXh0UHJvcHMucHJlRXhpc3RpbmdQZXJzb24gPT0gdW5kZWZpbmVkXG4gICAgICB8fCB0aGlzLnN0YXRlLmNhbkJlSW5pdGlhbGl6ZWQgPT0gZmFsc2VcbiAgICApIHJldHVybjtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlVG9QcmVFeGlzdGluZ1BlcnNvbihuZXh0UHJvcHMucHJlRXhpc3RpbmdQZXJzb24pO1xuICAgIHRoaXMuc3RhdGUuY2FuQmVJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZUFycmF5T2ZWYWx1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KCt0aGlzLnByb3BzLm51bUNvbHMpKS5tYXAoTnVtYmVyLnByb3RvdHlwZS52YWx1ZU9mLHZhbCk7XG4gIH0sXG5cbiAgaGFuZGxlUGVyc29uTmFtZUNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuc3RhdGUucGVyc29uTmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7ICAgIFxuICAgIHRoaXMucHJvcHMudXBkYXRlUGFyZW50KHRoaXMuc3RhdGUpO1xuICB9LFxuXG4gIGhhbmRsZVZvdGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgdm90ZUluZGV4ID0gK2UudGFyZ2V0Lm5hbWUuc3BsaXQoJy0nKVsxXTtcbiAgICBsZXQgdm90ZVZhbHVlID0gdGhpcy5zdGF0ZS52b3Rlc1t2b3RlSW5kZXhdO1xuICAgIGxldCBuZXh0Vm90ZVZhbHVlID0gdm90ZVZhbHVlID4gMCA/IHZvdGVWYWx1ZS0xIDogMztcbiAgICBcbiAgICB0aGlzLnN0YXRlLnZvdGVzW3ZvdGVJbmRleF0gPSBuZXh0Vm90ZVZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7IFxuICAgIHRoaXMucHJvcHMudXBkYXRlUGFyZW50KHRoaXMuc3RhdGUpO1xuICB9LFxuXG4gIHNldFN0YXRlVG9QcmVFeGlzdGluZ1BlcnNvbjogZnVuY3Rpb24ocHJlRXhpc3RpbmdQZXJzb24pIHtcbiAgICB0aGlzLnN0YXRlLnBlcnNvbk5hbWUgPSBwcmVFeGlzdGluZ1BlcnNvbi5wZXJzb25OYW1lOyAgICBcbiAgICB0aGlzLnN0YXRlLnZvdGVzID0gcHJlRXhpc3RpbmdQZXJzb24udm90ZXMubWFwKGZ1bmN0aW9uICh2b3RlKSB7IHJldHVybiB2b3RlOyB9KTsgICAgXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAvLyB0aGlzLnByb3BzLnVwZGF0ZVBhcmVudCh0aGlzLnN0YXRlKTtcbiAgICBcbiAgfSxcbiAgXG4gIGdldFBlcnNvbkZvckZpcmViYXNlTmFtZUZyb21TdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGVyc29uTmFtZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwZXJzb25OYW1lID0gdGhpcy5zdGF0ZS5wZXJzb25OYW1lOyAgICBcbiAgICBsZXQgSHRtbCA9IFtcbiAgICAgIDx0ZCBrZXk9XCIwXCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICBuYW1lPVwicGVyc29uTmFtZVwiIFxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBlcnNvbk5hbWVDaGFuZ2V9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgXG4gICAgICAgICAgdmFsdWU9e3BlcnNvbk5hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgIF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLm51bUNvbHM7IGkrKykge1xuICAgICAgbGV0IG5hbWUgPSBcInZvdGUtXCIraTtcbiAgICAgIGxldCB2b3RlVmFsdWUgPSB0aGlzLnN0YXRlLnZvdGVzW2ldO1xuICAgICAgbGV0IHN0YXR1c0NsYXNzID0gXCJwaWNrLVwiK3ZvdGVWYWx1ZTtcbiAgICAgIGxldCBpY29uQ2xhc3NlcyA9IFwiZ2x5cGhpY29uIFwiK0lDT05TW3ZvdGVWYWx1ZV07XG4gICAgICBsZXQgY2xhc3NlcyA9IHN0YXR1c0NsYXNzICsgXCIgXCIgKyBpY29uQ2xhc3NlcztcbiAgICAgIEh0bWwucHVzaChcbiAgICAgICAgPHRkIGtleT17aSsxfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc30gbmFtZT17bmFtZX0gZGF0YS1pbmRleD17aX0gdmFsdWU9e3RoaXMuc3RhdGUudm90ZXNbaV19IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZUNoYW5nZX0+PC9idXR0b24+XG4gICAgICAgIDwvdGQ+KTtcbiAgICB9IFxuICAgIHJldHVybiA8dHI+XG4gICAgICB7SHRtbH0gICAgICBcbiAgICA8L3RyPjtcbiAgfVxufSk7XG4gICAgICAgICAgICAgICAgICAgICBcbmxldCBUb3RhbHNSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgIGxldCB0b3RhbHNIdG1sID0gdGhpcy5nZXRUb3RhbHNIdG1sKCk7XG4gICAgIHJldHVybiA8dHI+XG4gICAgICAge3RvdGFsc0h0bWx9XG4gICAgIDwvdHI+O1xuICB9LFxuICBcbiAgZ2V0VG90YWxzSHRtbDogZnVuY3Rpb24oKSB7XG4gICAgIGxldCB0b3RhbHNIdG1sID0gWzx0aCBrZXk9XCIwXCIgY2xhc3NOYW1lPVwib3Blbi1yaWdodFwiPlRPVEFMPC90aD5dO1xuICAgICB0aGlzLnJlYWR5VG90YWxzKCk7ICAgICAgICBcbiAgICAgbGV0IGtleSA9IDE7XG4gICAgIGZvciAobGV0IHRvdGFsIG9mIHRoaXMudG90YWxzKSB7XG4gICAgICAgdG90YWxzSHRtbC5wdXNoKDx0aCBrZXk9e2tleX0gY2xhc3NOYW1lPVwiYm90dG9tLWxpbmVcIj57dG90YWx9PC90aD4pO1xuICAgICAgIGtleSs9MTtcbiAgICAgfVxuICAgICByZXR1cm4gdG90YWxzSHRtbDtcbiAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWR5VG90YWxzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvdGFscyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRoaXMucHJvcHMubnVtQ29scykpLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsMCk7O1xuICAgIGxldCBwZW9wbGUgPSB0aGlzLnByb3BzLnBlb3BsZTtcbiAgICBmb3IgKGxldCBuYW1lIGluIHBlb3BsZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZW9wbGVbbmFtZV1bJ3ZvdGVzJ10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50b3RhbHNbaV0gKz0gcGVvcGxlW25hbWVdWyd2b3RlcyddW2ldIDwgMyA/IHBlb3BsZVtuYW1lXVsndm90ZXMnXVtpXSAvIDIgOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4gICAgICAgICAgICAgICAgICAgICBcbmxldCBWb3Rlc1NlY3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZUV4aXN0aW5nUGVyc29uOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgb25EZWxldGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoIWNvbmZpcm0gKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbHRlIFwiICsgbmFtZSArIFwiZnJvbSB0aGUgcmVzdWx0cz9cIikpXG4gICAgICByZXR1cm47ICAgIFxuICAgIHRoaXMucHJvcHMuZGVsZXRlUGVyc29uRnJvbURhdGFiYXNlKG5hbWUpO1xuICB9LFxuICBvbkVkaXQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgcGVyc29uID0gdGhpcy5wcm9wcy5wZW9wbGVbbmFtZV07XG4gICAgdGhpcy5zdGF0ZS5wcmVFeGlzdGluZ1BlcnNvbiA9IHtcbiAgICAgIHBlcnNvbk5hbWU6IG5hbWUsXG4gICAgICB2b3RlczogcGVyc29uLnZvdGVzXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIC8vIHRoaXMucHJvcHMuZGVsZXRlUGVyc29uRnJvbURhdGFiYXNlKG5hbWUpO1xuICB9LFxuICBcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgSHRtbCA9IFtdO1xuICAgIGxldCBrZXkgPSAwO1xuICAgIGxldCBwZW9wbGVIYXZlVm90ZWQgPSAhT2JqZWN0LmlzKHRoaXMucHJvcHMucGVvcGxlLHt9KTtcbiAgICBcbiAgICBpZihwZW9wbGVIYXZlVm90ZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5wcm9wcy5wZW9wbGUpIHtcbiAgICAgICAgSHRtbC5wdXNoKFxuICAgICAgICAgIDxWb3Rlc1JvdyBcbiAgICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLm9uRGVsZXRlLmJpbmQodGhpcywgbmFtZSl9IFxuICAgICAgICAgICAgb25FZGl0PXt0aGlzLm9uRWRpdC5iaW5kKHRoaXMsIG5hbWUpfSBcbiAgICAgICAgICAgIGtleT17a2V5Kz0xfSBcbiAgICAgICAgICAgIG5hbWU9e25hbWV9IFxuICAgICAgICAgICAgdm90ZXM9e3RoaXMucHJvcHMucGVvcGxlW25hbWVdLnZvdGVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9IFxuICAgICAgSHRtbC5wdXNoKFxuICAgICAgICA8TmV3Vm90ZXNSb3cgXG4gICAgICAgICAgdXBkYXRlUGFyZW50PXt0aGlzLnByb3BzLnVwZGF0ZVBhcmVudH0gXG4gICAgICAgICAga2V5PXtrZXkrPTF9IFxuICAgICAgICAgIG51bUNvbHM9e3RoaXMucHJvcHMubnVtQ29sc30gXG4gICAgICAgICAgcHJlRXhpc3RpbmdQZXJzb249e3RoaXMuc3RhdGUucHJlRXhpc3RpbmdQZXJzb259XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgSHRtbC5wdXNoKDxUb3RhbHNSb3cga2V5PXtrZXkrPTF9IHBlb3BsZT17dGhpcy5wcm9wcy5wZW9wbGV9IG51bUNvbHM9e3RoaXMucHJvcHMubnVtQ29sc30vPik7ICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiA8dGJvZHk+XG4gICAgICB7SHRtbH1cbiAgICA8L3Rib2R5PlxuICB9LFxufSk7XG5cbmxldCBEYXRlUGlja2VyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlczogW10sXG4gICAgICBwZW9wbGU6IFtdLFxuICAgICAgdHlwZTogJycsXG4gICAgICBuZXdQZXJzb246IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHZvdGVzOiBbXVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIFxuICBtaXhpbnM6IFtSZWFjdEZpcmVNaXhpbl0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpcmViYXNlUmVmID0gbmV3IEZpcmViYXNlKFwiaHR0cHM6Ly9kaXNwdXRlZC5maXJlYmFzZWlvLmNvbS9kYXRhLWNoYXJsaWUtMjAxNi0wMi0xM1QwMDoxODozMS0wNTowMC9cIik7XG4gICAgdGhpcy5maXJlYmFzZVJlZi5vbigndmFsdWUnLCBmdW5jdGlvbihkYXRhU25hcHNob3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRlczogZGF0YVNuYXBzaG90LnZhbCgpLmRhdGVzLFxuICAgICAgICBwZW9wbGU6IGRhdGFTbmFwc2hvdC52YWwoKS5wZW9wbGUsXG4gICAgICAgIHR5cGU6IGRhdGFTbmFwc2hvdC52YWwoKS50eXBlXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuICBcbiAgaGFuZGxlU3VibWl0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoICEgdGhpcy52b3Rlc0FyZVZhbGlkKCkpXG4gICAgICB0aGlzLmhhbmRsZUludmFsaWRWb3RlcygpO1xuICAgIFxuICAgIHRoaXMuYWRkUGVyc29uVG9EYXRhYmFzZSgpO1xuICB9LFxuICBcbiAgZ2V0UGVyc29uRm9yRmlyZWJhc2U6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZGF0YVsndm90ZXMnXSA9IHRoaXMuZ2V0Vm90ZXMoKTtcbiAgICBsZXQgcGVyc29uID0ge307ICAgIFxuICAgIHBlcnNvblt0aGlzLnN0YXRlLm5ld1BlcnNvbi5wZXJzb25OYW1lXSA9IGRhdGE7XG4gICAgcmV0dXJuIHBlcnNvbjtcbiAgfSxcbiAgXG4gIGdldFZvdGVzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5uZXdQZXJzb24udm90ZXM7XG4gIH0sXG4gIFxuICB2b3Rlc0FyZVZhbGlkOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgdm90ZXMgPSB0aGlzLmdldFZvdGVzKCk7XG4gICAgXG4gICAgaWYgKHZvdGVzLmxlbmd0aCA+IDEpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgXG4gIGFkZFBlcnNvblRvRGF0YWJhc2U6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwZXJzb24gPSB0aGlzLmdldFBlcnNvbkZvckZpcmViYXNlKCk7XG4gICAgbGV0IHBlb3BsZSA9IHRoaXMuZmlyZWJhc2VSZWYuY2hpbGQoXCJwZW9wbGVcIik7XG4gICAgcGVvcGxlLnVwZGF0ZShwZXJzb24pO1xuICB9LFxuICBcbiAgdXBkYXRlUGVyc29uSW5TdGF0ZTogZnVuY3Rpb24ocGVyc29uKSB7XG4gICAgdGhpcy5zdGF0ZS5uZXdQZXJzb24gPSBwZXJzb247XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfSxcbiAgXG4gIGRlbGV0ZVBlcnNvbkZyb21EYXRhYmFzZTogZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBwZW9wbGUgPSB0aGlzLmZpcmViYXNlUmVmLmNoaWxkKFwicGVvcGxlXCIpO1xuICAgIGxldCBwZXJzb24gPSBwZW9wbGUuY2hpbGQobmFtZSk7XG4gICAgcGVyc29uLnJlbW92ZSgpO1xuICB9LFxuICBcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyIGNlbnRlci1jaGlsZHJlblwiPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPERhdGVzU2VjdGlvbiBkYXRlcz17dGhpcy5zdGF0ZS5kYXRlc30gLz5cbiAgICAgICAgICA8Vm90ZXNTZWN0aW9uIFxuICAgICAgICAgICAgZGVsZXRlUGVyc29uRnJvbURhdGFiYXNlPXt0aGlzLmRlbGV0ZVBlcnNvbkZyb21EYXRhYmFzZX1cbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudD17dGhpcy51cGRhdGVQZXJzb25JblN0YXRlfSBcbiAgICAgICAgICAgIHBlb3BsZT17dGhpcy5zdGF0ZS5wZW9wbGV9IFxuICAgICAgICAgICAgbnVtQ29scz17dGhpcy5zdGF0ZS5kYXRlcy5sZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY2hpbGRyZW5cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gc3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TdWJtaXQgQXZhaWxhYmlsaXR5PC9idXR0b24+XG4gICAgICA8L2Rpdj4gICAgICAgIFxuICAgIDwvZGl2PjtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcig8RGF0ZVBpY2tlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVQaWNrZXInKSk7Il19
