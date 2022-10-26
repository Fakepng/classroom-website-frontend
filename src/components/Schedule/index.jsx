import Table from "react-bootstrap/Table";

const Schedule = () => {
  return (
    <>
      <Table
        striped
        bordered
        hover
        responsive
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th>คาบที่</th>
            <th>H.R.</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
          <tr>
            <th>วัน/เวลา</th>
            <th>07.30 - 08.20 น.</th>
            <th>08.20 - 09.15 น.</th>
            <th>09.15 - 10.10 น.</th>
            <th>10.10 - 11.05 น.</th>
            <th>11.05 - 12.00 น.</th>
            <th>12.00 - 12.55 น.</th>
            <th>12.55 - 13.50 น.</th>
            <th>13.50 - 14.45 น.</th>
            <th>14.45 - 15.40 น.</th>
            <th>15.40 - 16.35 น.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>จันทร์</th>
            <th>
              เข้าแถว/
              <br />
              โฮมรูม
            </th>
            <th>
              ค33202
              <br />
              คณิตศาสตร์เพื่มเติม
              <br />
              อ.นิภาศิริ
            </th>
            <th>
              อ33202
              <br />
              English
              <br />
              T.John W.
            </th>
            <th colSpan={2}>
              ว30161 (926)
              <br />
              ดาราศาสตร์
              <br />
              อ.หทัยทัต
            </th>
            <th rowSpan={5}>พักกลางวัน</th>
            <th>
              ท33102
              <br />
              ภาษาไทย
              <br />
              อ.ภาวินี
            </th>
            <th colSpan={2}>
              ว33292 (com1)
              <br />
              คอมพิวเตอร์
              <br />
              ครูคอม3
            </th>
            <th>
              ก30900
              <br />
              แนะแนว
              <br />
              อ.ศักดินาณันพ์
            </th>
          </tr>
          <tr>
            <th>อังคาร</th>
            <th>
              เข้าแถว/
              <br />
              โฮมรูม
            </th>
            <th>
              ว33245
              <br />
              ชีววิทยา
              <br />
              อ.ประภัสสร
            </th>
            <th>
              อ33102
              <br />
              English
              <br />
              T.Dimitri
            </th>
            <th>
              ส33102
              <br />
              ประวัติศาสตร์
              <br />
              อ.อัมรา
            </th>
            <th>
              ค33102
              <br />
              คณิตศาสตร์
              <br />
              อ.นิภาศิริ
            </th>
            <th colSpan={3}>
              เตรียมความพร้อม/ติว ม.6
              <br />
              หอประชุมฯ
            </th>
          </tr>
          <tr>
            <th>พุธ</th>
            <th>
              เข้าแถว/
              <br />
              โฮมรูม
            </th>
            <th>
              ค33202
              <br />
              คณิตศาสตร์เพื่มเติม
              <br />
              อ.นิภาศิริ
            </th>
            <th>
              ว33101
              <br />
              ฟิสิกส์
              <br />
              อ.พงษ์ณกิจ
            </th>
            <th colSpan={2}>
              ว33121 (913)
              <br />
              เคมี
              <br />
              อ.กฤษณศักดิ์
            </th>
            <th>
              ศ33101 (215)
              <br />
              ศิลปะ
              <br />
              อ.พิษณุ
            </th>
            <th>
              ง33101
              <br />
              การงาน
              <br />
              อ.ลัดดา
            </th>
            <th>
              อ33212
              <br />
              Grammar
              <br />
              อ.ณัฐฏ์ภัค
            </th>
            <th>
              อ33102
              <br />
              English
              <br />
              T.Dimitri
            </th>
          </tr>
          <tr>
            <th>พฤหัสบดี</th>
            <th>
              เข้าแถว/
              <br />
              โฮมรูม
            </th>
            <th>
              ว30161
              <br />
              ดาราศาสตร์
              <br />
              อ.หทัยทัต
            </th>
            <th>
              ส33102
              <br />
              ประวัติศาสตร์
              <br />
              อ.อัมรา
            </th>
            <th>
              พ33102
              <br />
              พลศึกษาและสุขศึกษา
              <br />
              อ.รินทร์ดา, อ.ดนัย
            </th>
            <th>
              อ33202
              <br />
              English
              <br />
              T.John W.
            </th>
            <th colSpan={2}>
              ว33245 (923)
              <br />
              ชีววิทยา
              <br />
              อ.ประภัสสร
            </th>
            <th>
              ค33102
              <br />
              คณิตศาสตร์
              <br />
              อ.นิภาศิริ
            </th>
            <th>
              อ33204
              <br />
              English
              <br />
              T.Dimitri
            </th>
          </tr>
          <tr>
            <th>ศุกร์</th>
            <th>
              เข้าแถว/
              <br />
              โฮมรูม
            </th>
            <th>
              ว33121
              <br />
              เคมี
              <br />
              อ.กฤษณศักดิ์
            </th>
            <th>
              ค33202
              <br />
              คณิตศาสตร์เพื่มเติม
              <br />
              อ.นิภาศิริ
            </th>
            <th colSpan={2}>
              ว33101 (913)
              <br />
              ฟิสิกส์
              <br />
              อ.พงษ์ณกิจ
            </th>
            <th>
              อ33204
              <br />
              English
              <br />
              T.Dimitri
            </th>
            <th>
              ท33102
              <br />
              ภาษาไทย
              <br />
              อ.ภาวินี
            </th>
            <th>
              กิจกรรมเพื่อสังคมและ
              <br />
              สาธารณประโยชน์
            </th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Schedule;
