function getRecipientEmail(users, userLoggedIn) {
  // console.log(
  //   users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0]
  // );
  return users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  )[0];
}

export default getRecipientEmail;
