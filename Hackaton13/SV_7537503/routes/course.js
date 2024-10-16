const express = require('express');
const Course = require('../models/course'); // Asegúrate de que la ruta es correcta
const router = express.Router();

// Crear un nuevo curso
router.post('/', async (req, res) => {
    const { name, description, image, cover, price } = req.body;
    try {
        const course = new Course({ name, description, image, cover, price });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el curso', error });
    }
});

// Obtener todos los cursos
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los cursos', error });
    }
});

// Obtener un curso por ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Curso no encontrado' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el curso', error });
    }
});

// Actualizar un curso
router.put('/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Curso no encontrado' });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el curso', error });
    }
});

// Eliminar un curso
router.delete('/:id', async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: 'Curso no encontrado' });
        res.status(200).json({ message: 'Curso eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el curso', error });
    }
});

module.exports = router;
