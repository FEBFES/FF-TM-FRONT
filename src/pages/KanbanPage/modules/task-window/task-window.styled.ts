.taskWindow {
  display: flex;
  flex-direction: column;
  /*todo width modal to const*/
  min-width: 360px;
  width: 360px;
  border-left: 1px solid var(--bg-border);
  background: var(--bg-0);
  max-height: 100vh;
  height: 100vh;
  z-index: 10;
}

.header {
  padding: 0 18px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}

/* //todo change to FLEX and PAddinWrapper ui Component */
.header__right {
  display: flex;
  align-items: center;
}

.taskWindow_id {
  font-weight: 700;
  font-size: 20px;
  color: #a8a7a7;
}

.closeIcon {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 40px;
}

.subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 30px;
  border-bottom: 1px solid var(--bg-border);
}

.subheader__title {
  width: 80%;
  font-weight: 600;
  font-size: 18px;
  color: var(--font-defautl);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subheader__type {
  cursor: pointer;
  padding: 3px 11px;
  font-size: 14px;
  color: #ec655c;
  font-weight: 600;
  border: 2px solid #ec655c;
  border-radius: 17px;
}

.users {
  height: 5%;
  padding: 0 18px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* //todo change to FLEX and PAddinWrapper ui Component */
.user__block {
  display: flex;
  align-items: center;
}

/* //todo change to FLEX and PAddinWrapper ui Component */
.priority__container {
  display: flex;
  align-items: center;
}
.priority {
  height: 5%;
  padding: 0 18px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  padding: 0 18px;
  margin-top: 25px;
  margin-bottom: 20px;
  height: 100px;
}

.description__text {
  height: 100px;
  position: relative;
  width: 100%;
  resize: none;
  background: transparent;
  border: 5px;
  margin-top: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #575757;
  outline: none;
}

.windowToggle {
  margin: 20px 18px 0;
  display: flex;
  border-bottom: 1px solid var(--bg-border);
}

.windowToggle__item {
  cursor: pointer;
  padding: 5px;
  border-top: 1px solid var(--bg-border);
  border-right: 1px solid var(--bg-border);
  border-radius: 0 6px 0 6px;
  font-weight: 600;
  font-size: 14px;
  color: #989898;
}
.windowToggle__item.windowToggle__item_active {
  color: #000000;
}
.date__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 20px;
}
.filesUploadContainer {
  margin-top: 20px;
  width: 100%;
  padding: 0 20px 0 20px;
}

.fileInput__container {
  position: relative;
  width: 100%;
  height: 100px;
  border: 2px dashed var(--bg-border);
  border-radius: 5px;
}

.fileInput {
  display: none;
}
.fileInput_label {
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-gray);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.fileCont {
  padding-left: 6px;
  padding-right: 6px;
  height: 150px;
  overflow-y: scroll;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}