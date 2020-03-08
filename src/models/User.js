class User {
  constructor(name) {
    this.name = name;
    this.picture = [];
    this.comments = [];
  }

  linkComment(comment) {
    !this.comments.includes(comment) && this.comments.push(comment);
  }

  linkPicture(picture) {
    !this.pictures.includes(picture) && this.pictures.push(picture);
    !picture.users.includes(this) && picture.linkUser(this);
  }
}

export default User;
