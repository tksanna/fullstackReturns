const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part partName={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  console.log(props);
  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  )
}

const App = () => { 
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App;