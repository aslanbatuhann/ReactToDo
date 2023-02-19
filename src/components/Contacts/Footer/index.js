import {useState,useEffect} from 'react'

function Footer({contacts, setContacts, situation, setSituation}) {
	const [activeSize, setActiveSize] = useState(0);

	const activeButton = () => {
		const arr = contacts.filter(item => item.isActive);
		setContacts(arr);
	};

	const onClickAvailable = (e) => {
		setSituation(e.target.name);
	};

	useEffect(() => {
		setActiveSize(0);
		contacts.map((item) => {
			if (item.isActive) {
				setActiveSize(n => n+1);
			}
		})
	},[contacts]);

  return (
    <footer class="footer">
		<span class="todo-count">
			<strong>{activeSize}</strong>
			items left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" name="All" className={situation ==="All" ? "selected" :""} onClick={onClickAvailable}>All</a>
			</li>
			<li>
				<a href="#/" name="Active" className={situation ==="Active" ? "selected" :""} onClick={onClickAvailable}>Active</a>
			</li>
			<li>
				<a href="#/" name="Completed" className={situation ==="Completed" ? "selected" :""} onClick={onClickAvailable}>Completed</a>
			</li>
		</ul>

		<button class="clear-completed" onClick={activeButton}>
			Clear completed
		</button>
		<footer className="info">
			<p>Click to edit a todo</p>
			<p>Created by <a href="https://d12n.me/">Dmitry Sharabin Batuhan Aslan</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
	</footer>
  )
}

export default Footer;