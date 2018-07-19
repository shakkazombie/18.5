import React from "react";
import styles from "./UsersList.css";

const UsersList = (props) => (
  <div className={styles.Users}>
    <div className={styles.UsersOnline}>
      <p>Active users</p>
      <span className={styles.Counter}>{props.users.length}</span> 
    </div>
    <ul className={styles.UsersList}>
      {
        props.users.map((user) => {
          return (
            <li
              key={user.id}
              className={styles.UserItem}>
                {user.name}
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default UsersList;