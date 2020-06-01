import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import AddItem from "./components/AddItem";
import FilterPanel from "./components/FilterPanel";

export default class App extends Component {
  state = {
    todos: [
      { label: "Drink Coffe", important: false, id: 1, done: false },
      { label: "Sleep all day", important: false, id: 2, done: false },
      { label: "Have a lanch", important: false, id: 3, done: false },
    ],
    searchText: "",
    filter: "All",
  };

  onDeleted = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)]; // нельзя использовать splice
      return {
        todos: newArr,
      };
    });
  };

  onToggleItem(arr, id, nameAction) {
    const idx = arr.findIndex((el) => el.id === id);
    const newItem = { ...arr[idx], [nameAction]: !arr[idx][nameAction] };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return newArr;
  }
  //
  onDoneItem = (id) => {
    this.setState(({ todos }) => {
      return { todos: this.onToggleItem(todos, id, "done") };
    });
  };

  onMark = (id) => {
    this.setState(({ todos }) => {
      return { todos: this.onToggleItem(todos, id, "important") };
    });
  };

  addNote = (text) => {
    this.setState(({ todos }) => {
      ///можно -- newArr = [...todos, {something } ]
      const newArr = [...todos].concat({
        label: text,
        important: false,
        id: todos[todos.length - 1].id + 1,
      });

      return {
        todos: newArr,
      };
    });
  };

  searchNote = (ev) => {
    this.setState({
      searchText: ev.target.value,
    });
  };

  searchFilter = (arr, search) => {
    if (search.length === 0) {
      return arr;
    } else {
      return arr.filter((item) => item.label.indexOf(search) > -1);
    }
  };

  filterNotes = (event) => {
    this.setState({
      filter: event.target.name,
    });
  };

  filterTodos = (arr, filter) => {
    if (filter === "All") {
      return arr;
    } else if (filter === "Done") {
      return arr.filter((item) => item.done);
    } else if (filter === "Active") {
      return arr.filter((item) => !item.done);
    }
  };

  render() {
    const visibleItems = this.searchFilter(
      this.state.todos,
      this.state.searchText
    );

    const filterItems = this.filterTodos(visibleItems, this.state.filter);

    return (
      <div className="App">
        <AppHeader />
        <div className="searchform">
          <SearchPanel todos={this.state.todos} searchNote={this.searchNote} />
          <FilterPanel filterNotes={this.filterNotes} />
        </div>

        <TodoList
          todos={filterItems}
          onDeleted={this.onDeleted}
          onDoneItem={this.onDoneItem}
          onMark={this.onMark}
        />
        <AddItem addNote={this.addNote} />
      </div>
    );
  }
}
