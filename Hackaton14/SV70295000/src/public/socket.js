const socket = io()

export const loadNotes = () => {
    socket.on('loadNotes', (data) =>{
      console.log(data);
    });
};

export const saveNotes= (title, description) => {
    socket.emit('newnote', {
        title,
        description
    });
};