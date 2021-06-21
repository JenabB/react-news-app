import React from 'react';

const Tentang = () => {
  return (
    <div>
      <h1 className="bg-blue-600 text-white font-bold text-center p-4">
        Tentang
      </h1>

      <div className="p-4">
        <div>
          <h1>
            Aplikasi Web untuk membaca berita dari berbagai sumber yang relevan
            seperti CNN, CNBC, Antara dan lain-lain. Menggunakan api{' '}
            <a
              href="berita-indo-api.vercel.app"
              className="text-blue font-bold"
            >
              berita-indo-api.vercel.app
            </a>
          </h1>
        </div>
        <div className="mt-20">
          <h1 className="text-center font-bold">Kontributor</h1>
          <table className="text-center mx-auto border-4 ">
            <tr>
              <th>Nama</th>
              <th>Role</th>
            </tr>
            <tr>
              <td>Satya Wikananda</td>
              <td>Backend Developer</td>
            </tr>
            <tr>
              <td>Yogi Surya Pranata</td>
              <td>Frontend Developer</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
