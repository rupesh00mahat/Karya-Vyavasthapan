import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiEqualizer2Line } from "react-icons/ri";
import { CiGrid2H, CiGrid2V, CiEdit } from "react-icons/ci";

function ContentAreaHeader() {
  return (
    <div className="content-area-header">
    <section className="content-area-header-section-one">
      <span className="semi-title">My Workspace/Project/Shopavvy</span>
      <h2>
        Shopavvy{" "}
        <span>
          <CiEdit color=" #586aea" />
        </span>
      </h2>

      <p>Due Date: Sep 7, 2023</p>
    </section>
    <section className="content-area-header-section-two">
      <div className="content-header-area-one">
        <span>Bar</span>
        <span>60% completed</span>
        <button className="star-button">
          <FaStar size={20} color="#ffb800" />
        </button>
        <button className="create-task">Create task</button>
      </div>
      <div className="content-header-area-two">
        <button className="sort-by">
          <IoFilter color="#4f525a" size={15} />
          <span>Sort by</span>
          <IoIosArrowDown size={15} color="#586aea" />
        </button>
        <button className="filter">
          <RiEqualizer2Line />

          <span>Filter</span>
          <IoIosArrowDown size={15} color="#586aea" />
        </button>
        <div className="divider"></div>
        <div className="button-group">
          <button>
            <CiGrid2H size={18} color="#4f525a" />
          </button>
          <button>
            <CiGrid2V size={18} color="#4f525a" />
          </button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ContentAreaHeader