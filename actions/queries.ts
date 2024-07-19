
export const getNotes = async () => {
    const res = await fetch(`/api/notes`);
      if (!res.ok) {
        throw new Error("Failed to fetch notes");
      }
    
    const data = await res.json();

    return data.notes;
}

export const createNote = async () => {

  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "Untitled", icon: "", content: "" }),
  });
  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  const data = await res.json();

  return data;
};


export const getNoteById = async (id: string) => {
  const res = await fetch(`/api/notes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }
  const data = await res.json();

  return data;
}

export const changeNoteContentById = async (id: string, content: string) => {
  const res = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) {
    throw new Error("Failed to update note");
  }
}


export const deleteNoteById = async (id: string) => {
  const res = await fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete note");
  }
}

export const updateIconById = async (id: string, icon: string) => {
  const res = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ icon: icon }),
  });
  if (!res.ok) {
    throw new Error("Failed to update note");
  } else {
    console.log("icon updated");
  }
}

export const updateTitleById = async (id: string, value: string) => {
  const res = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: value }),
  });
  if (!res.ok) {
    throw new Error("Failed to update note");
  } else {
    console.log("note updated");
  }
}