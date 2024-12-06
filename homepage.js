import React, { useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: "Seminar Online", description: "Peran Generasi Milenial Dalam Menghadapi Masa Pandemi Covid-19", thumbnail: "https://i.ibb.co.com/gt6zwjx/iyttiytiy.jpg" },
    { id: 2, title: "Penanganan Krisis Covid-19", description: "Menyelamatkan Kelompok Marginal Dari Hantaman Covid-19", thumbnail: "https://i.ibb.co.com/QnZZ4Vm/zcxxzcxzc.webp" },
  ]);

  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", thumbnail: "" });

  // Add Video
  const addVideo = () => {
    const newVideo = {
      id: videos.length + 1,
      title: `Video ${videos.length + 1}`,
      description: `Deskripsi video ${videos.length + 1}`,
      thumbnail: "https://via.placeholder.com/250x150?text=New+Video",
    };
    setVideos([...videos, newVideo]);
  };

  // Delete Video
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  // Start Edit Video
  const startEditing = (video) => {
    setEditingVideo(video.id);
    setFormData({
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
    });
  };

  // Save Edit Video
  const saveEdit = () => {
    setVideos(
      videos.map((video) =>
        video.id === editingVideo
          ? { ...video, ...formData }
          : video
      )
    );
    setEditingVideo(null);
    setFormData({ title: "", description: "", thumbnail: "" });
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditingVideo(null);
    setFormData({ title: "", description: "", thumbnail: "" });
  };

  // Input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Video Belajar</h1>
        <nav>
          <a href="#kategori">Kategori</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#kontak">Kontak</a>
          <img
            src="https://i.ibb.co.com/dBRhW45/kjljkjl.jpg"
            alt="Avatar"
            className="avatar"
          />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Selamat Datang di Website Kami</h2>
        <p>Belajar lebih mudah dengan video tutorial berkualitas.</p>
        <button>Mulai Sekarang</button>
      </section>

      {/* Categories */}
      <section id="kategori" className="categories">
        <h2>Kategori</h2>
        <div className="category-buttons">
          <button className="category-button">Digital & Teknologi</button>
          <button className="category-button">Pemasaran</button>
          <button className="category-button">Pengembangan Diri</button>
          <button className="category-button">Desain</button>
        </div>
      </section>

      {/* Video List */}
      <section className="video-list">
        <h2>Daftar Video</h2>
        <div className="videos">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <img
                src={video.thumbnail}
                alt={video.title}
              />
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {editingVideo === video.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Judul Video"
                  />
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Deskripsi Video"
                  />
                  <input
                    type="text"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="URL Thumbnail"
                  />
                  <button onClick={saveEdit}>Simpan</button>
                  <button onClick={cancelEdit}>Batal</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => startEditing(video)}>Edit</button>
                  <button onClick={() => deleteVideo(video.id)}>Hapus</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={addVideo} className="add-video">
          Tambah Video
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Produk</h4>
            <a href="#digital">Digital & Teknologi</a>
            <a href="#pemasaran">Pemasaran</a>
            <a href="#pengembangan">Pengembangan Diri</a>
            <a href="#desain">Desain</a>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <a href="#tentang">Tentang Kami</a>
            <a href="#faq">FAQ</a>
            <a href="#kebijakan">Kebijakan Privasi</a>
            <a href="#layanan">Ketentuan Layanan</a>
          </div>
          <div>
            <h4>Top Sukses</h4>
            <a href="#kontak">Hubungi Kami</a>
          </div>
        </div>
        <p>&copy; 2024 Video Belajar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
