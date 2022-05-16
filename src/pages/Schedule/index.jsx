import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet";

const Schedule = () => {
	return (
		<>
			<Helmet>
				<title>SP 617</title>
				<meta property='og:title' content='SP 617' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta property='og:image' content='%PUBLIC_URL%/sp517.png' />
			</Helmet>
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
						<th>14.15 - 15.40 น.</th>
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
						<th colSpan={2}>
							ว33191, ว33291 (com3)
							<br />
							อ.เนตรนภา
						</th>
						<th colSpan={2}>
							ว33244 (923)
							<br />
							อ.ประภัสสร
						</th>
						<th rowSpan={5}>พักกลางวัน</th>
						<th>
							ค33101
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ว33205
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>
							ท33101
							<br />
							อ.ภาวินี
						</th>
						<th>
							อ33203
							<br />
							T.Dimitri
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
							อ33201
							<br />
							T.Grandt
						</th>
						<th>
							ส33101
							<br />
							อ.อัมรา
						</th>
						<th>
							อ33101
							<br />
							T.Dimitri
						</th>
						<th>
							ค33101
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ว33225
							<br />
							อ.กฤษณศักดิ์
						</th>
						<th>ศึกษาค้นคว้า</th>
						<th>กิจกรรมนักเรียน</th>
					</tr>
					<tr>
						<th>พุธ</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							ค33201
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ส33101
							<br />
							อ.อัมรา
						</th>
						<th>
							อ33203
							<br />
							T.Dimitri
						</th>
						<th>ศึกษาค้นคว้า</th>
						<th>
							ศ33102
							<br />
							อ.สุภัทรา (214)
						</th>
						<th>
							อ33211
							<br />
							อ.ณัฏฐ์ภัค
						</th>
						<th>
							ว33205
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>
							พ33101
							<br />
							อ.ดนัย, อ.รินทร์ดา
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
							ค33201
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ก30900
							<br />
							อ.ศักดินาณันพ์
						</th>
						<th colSpan={2}>
							ว33205 (931)
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>
							อ33101
							<br />
							T.Dimitri
						</th>
						<th colSpan={2}>วิชาเลือกเสรี ม.6</th>
					</tr>
					<tr>
						<th>ศุกร์</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							ค33201
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							อ33201
							<br />
							T.Grandt
						</th>
						<th colSpan={2}>
							ว33225 (913)
							<br />
							อ.กฤษณศักดิ์
						</th>
						<th>
							ท33201
							<br />
							อ.ภาวินี
						</th>
						<th>
							ว33244
							<br />
							อ.ประภัสสร
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
