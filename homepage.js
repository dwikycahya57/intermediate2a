import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Digital Marketing Basics",
      description: "Learn the fundamentals of digital marketing.",
      thumbnail: "https://i.ibb.co.com/bsV7gtc/ewq.jpg",
    },
    {
      id: 2,
      title: "Web Development Mastery",
      description: "Become a master in web development.",
      thumbnail: "https://i.ibb.co.com/HCvWzLW/qwes.jpg",
    },
    {
      id: 3,
      title: "Personal Growth Strategies",
      description: "Improve yourself with proven strategies.",
      thumbnail: "https://i.ibb.co.com/LtspHXw/zxc.jpg",
    },
  ]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    thumbnail: "",
  });

  const [editThumbnail, setEditThumbnail] = useState({ id: null, newThumbnail: "" });

  // Add new course
  const addCourse = () => {
    if (newCourse.title && newCourse.description && newCourse.thumbnail) {
      setCourses([...courses, { id: Date.now(), ...newCourse }]);
      setNewCourse({ title: "", description: "", thumbnail: "" });
    }
  };

  // Update thumbnail
  const updateThumbnail = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, thumbnail: editThumbnail.newThumbnail } : course
    );
    setCourses(updatedCourses);
    setEditThumbnail({ id: null, newThumbnail: "" });
  };

  // Delete course
  const deleteCourse = (id) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  };

  return (
    <div className="homepage">
      {/* Header */}
      <div className="header">
        <div className="logo">VideoBelajar</div>
        <div className="avatar">
          <img src="https://i.ibb.co.com/fdRyBTs/female1-512.webp" alt="User Avatar" />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url('https://i.ibb.co.com/WPYbymD/hero.jpg')` }}
      >
        <h2>Belajar Lebih Mudah dan Cepat</h2>
        <p>Koleksi video belajar untuk meningkatkan keterampilan Anda.</p>
        <button className="hero-button">Mulai Belajar</button>
      </div>

      {/* Main Section */}
      <div className="main-section">
        <h3>Koleksi Video Pembelajaran</h3>

        {/* Add Course Form */}
        <div className="add-course-form">
          <input
            type="text"
            placeholder="Judul Kursus"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Deskripsi"
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse({ ...newCourse, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="URL Thumbnail"
            value={newCourse.thumbnail}
            onChange={(e) =>
              setNewCourse({ ...newCourse, thumbnail: e.target.value })
            }
          />
          <button onClick={addCourse}>Tambah Kursus</button>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.thumbnail}
                alt={`${course.title} Thumbnail`}
                className="course-thumbnail"
              />
              <div className="course-info">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <button
                  onClick={() =>
                    setEditThumbnail({ id: course.id, newThumbnail: "" })
                  }
                >
                  Edit Thumbnail
                </button>
                <button onClick={() => deleteCourse(course.id)}>Delete</button>
              </div>
              {editThumbnail.id === course.id && (
                <div className="edit-thumbnail">
                  <input
                    type="text"
                    placeholder="URL Thumbnail Baru"
                    value={editThumbnail.newThumbnail}
                    onChange={(e) =>
                      setEditThumbnail({ ...editThumbnail, newThumbnail: e.target.value })
                    }
                  />
                  <button onClick={() => updateThumbnail(course.id)}>Update</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <button>Digital & Teknologi</button>
          <button>Pemasaran</button>
          <button>Manajemen Bisnis</button>
          <button>Pengembangan Diri</button>
          <button>Desain</button>
        </div>
        <div>
          <button>Tentang Kami</button>
          <button>FAQ</button>
          <button>Kebijakan Privasi</button>
          <button>Ketentuan Layanan</button>
          <button>Bantuan</button>
        </div>
        <div>
          <button>Tips Sukses</button>
          <button>Blog</button>
        </div>
        <p>© 2024 VideoBelajar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
